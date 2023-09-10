'use client';

import AdminAppHeader from '@/app/components/AdminAppHeader';
import {
  Container,
  Main,
  ButtonsContainer,
  ImageProductContainer,
  TitleLabel,
  SelectCategoryLabel,
  SelectContainer,
  DescriptionLabel,
  ToggleSwitchContainer,
  ToggleSwitch,
  LabelToglleSwitch,
  InputCheckBoxInToggle,
  Switch,
  PriceLabel,
  LoadingUploadWarningMessage,
} from './styles';

import LoadingIndicator from '@/app/components/LoadingIndicator';
import { poppins, bebas_neue } from '@/app/fonts';
import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import useFoodFetch from '@/app/hooks/useFoodFetch';
import { EndpointFoodApiEnum } from '@/app/enums';
import { useSession } from 'next-auth/react';
import { FileUploader } from 'react-drag-drop-files';

interface Category {
  id: number;
  name: string;
  businessId: number;
  uploadId: number;
}

interface Upload {
  id: number;
  name: string;
}

const fileTypes = ['JPG', 'PNG', 'GIF'];

export default function NewCategory() {
  const [name, setName] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const [checked, setChecked] = useState<boolean>(false);
  const [category, setCategory] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [priceIsValid, setPriceIsValid] = useState<boolean>(false);
  const [uploadName, setUploadName] = useState<string>('');
  const [categorySelected, setCategorySelected] = useState<
    Category | undefined
  >(undefined);
  const textAreaMaxLength = 300;
  const [remaining, setRemaining] = useState<number>(textAreaMaxLength);
  const router = useRouter();
  const { data: session } = useSession();
  const businessId = session?.data.business[0].id;

  const { data: categories } = useFoodFetch(
    EndpointFoodApiEnum.PRODUCT_CATEGORY,
    {
      injectProducts: true,
      businessId: businessId,
    },
  ) as { data: Category[] };

  //Upload request
  const {
    request: requestNewProductUpload,
    loading: loadingNewProductUpload,
    data: upload,
  } = useFoodFetch() as unknown as { data: Upload; request: any; loading: any };

  //Register product request
  const { request: requestRegisterNewProduct, loading: newProductLoading } =
    useFoodFetch();

  //setando o nome do upload vindo da req, para conseguir coloca-lo como imagem no containerImg do upload.
  useEffect(() => {
    setUploadName(upload.name);
  }, [upload]);

  //Fazendo req para back ao selecionar o arquivo de imagem.
  useEffect(() => {
    if (file) {
      const formData = new FormData();
      formData.append('upload', file, file.name);

      requestNewProductUpload({
        method: 'POST',
        body: formData,
        headers: {
          'Content-type': 'multipart/form-data',
        },
        endPoint: EndpointFoodApiEnum.UPLOAD,
      });
    }
  }, [file, requestNewProductUpload]);

  useEffect(() => {
    if (categories && categories.length === 1) {
      setCategory(() => categories[0].name);
    }
    const foundCategory = categories.find(prev => prev.name === category);

    setCategorySelected(foundCategory);
  }, [categories, category, categorySelected]);

  function OnChangeUploadFile(file: any) {
    setFile(file || null);
  }

  function handleTextAreaLength(event: ChangeEvent<HTMLTextAreaElement>) {
    setRemaining(textAreaMaxLength - event.target.value.length);
  }

  function handleInputPrice(event: React.FormEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    if (!/^[\d,]*$/.test(value)) {
      setPriceIsValid(true);
      target.value = value.replace(/[^\d,]/g, '');
    } else {
      setPriceIsValid(false);
    }
  }

  function handleNewProduct() {
    requestRegisterNewProduct({
      method: 'POST',
      body: {
        categoryId: categorySelected?.id,
        name: name,
        price,
        uploadId: upload.id,
        enabled: checked,
      },
      endPoint: EndpointFoodApiEnum.PRODUCT,
    });
  }

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    handleNewProduct();
  }

  return (
    <Container>
      <AdminAppHeader />;
      <Main>
        <form onSubmit={handleSubmit} action="">
          <h1 className={bebas_neue.className}>
            CADASTRO DE CATEGORIA DE PRODUTO
          </h1>

          <fieldset>
            <TitleLabel htmlFor="title" className={bebas_neue.className}>
              Titulo
              <input
                className={poppins.className}
                type="text"
                placeholder="De um titulo a sua categoria"
                onChange={e => setName(e.target.value)}
                value={name}
                id="title"
                minLength={1}
                required
              />
            </TitleLabel>

            <FileUploader
              // eslint-disable-next-line react/no-children-prop
              children={
                <ImageProductContainer className={poppins.className}>
                  {loadingNewProductUpload ? (
                    <LoadingIndicator />
                  ) : (
                    <Image
                      // src="/productImage.png"
                      src={
                        uploadName
                          ? `https://fooda.nyc3.digitaloceanspaces.com/develop/${uploadName}`
                          : '/productImage.png'
                      } // uploadName
                      alt=""
                      height={51}
                      width={51}
                    />
                  )}

                  <p>Arraste uma imagem</p>

                  <div>
                    <div></div>
                    <span className={poppins.className}>ou</span>
                    <div></div>
                  </div>

                  <button
                    disabled={!loadingNewProductUpload}
                    className={poppins.className}
                  >
                    <input
                      type="file"
                      onChange={e => {
                        const selectedFile =
                          e.target.files && e.target.files[0];
                        if (selectedFile) {
                          OnChangeUploadFile(selectedFile);
                        }
                      }}
                    />
                    Selecione do computador
                  </button>
                </ImageProductContainer>
              }
              handleChange={OnChangeUploadFile}
              name="file"
              types={fileTypes}
            />

            <SelectCategoryLabel
              htmlFor="foodCategory"
              className={bebas_neue.className}
            >
              SELECIONE EM QUAL CATEGORIA ESTE PRODUTO SERA EXIBIDO
              <SelectContainer>
                <select
                  className={poppins.className}
                  value={category}
                  id="foodCategory"
                  onChange={e => setCategory(e.target.value)}
                >
                  {businessId &&
                    categories &&
                    categories?.map(category => (
                      <option key={category.id} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                </select>
              </SelectContainer>
            </SelectCategoryLabel>

            <DescriptionLabel
              htmlFor="description"
              className={bebas_neue.className}
            >
              DESCRICAO
              <div>
                <textarea
                  id="description"
                  maxLength={textAreaMaxLength}
                  className={poppins.className}
                  onInput={handleTextAreaLength}
                  placeholder="Exemplo: 2 carnes de hamburger de angus, alface americana,
                  catupiry original, molho especial, pao da hora e queijo de
                  avestruz"
                ></textarea>

                <span className={poppins.className}>
                  Restam {remaining} caracteres
                </span>
              </div>
            </DescriptionLabel>

            <ToggleSwitchContainer>
              <ToggleSwitch>
                <p className={poppins.className}>
                  Exibir o produto no cardapio
                </p>
                <LabelToglleSwitch>
                  <InputCheckBoxInToggle
                    type="checkbox"
                    onChange={() => setChecked(!checked)}
                  />
                  <Switch />
                </LabelToglleSwitch>
              </ToggleSwitch>
            </ToggleSwitchContainer>

            <PriceLabel htmlFor="price" className={poppins.className}>
              <input
                className={poppins.className}
                type="text"
                placeholder="Exemplo: 15,25"
                onChange={e => setPrice(e.target.value)}
                value={price}
                id="price"
                onInput={handleInputPrice}
                minLength={1}
                required
              />
              {priceIsValid && (
                <span> O preco de seu prato precisa ser um número</span>
              )}
            </PriceLabel>
          </fieldset>

          <ButtonsContainer>
            <button
              onClick={() => router.push('/admin/produtos')}
              className={poppins.className}
              type="button"
            >
              Cancelar
            </button>
            <button
              disabled={newProductLoading || loadingNewProductUpload}
              type="submit"
              className={poppins.className}
            >
              {loadingNewProductUpload ? (
                <LoadingIndicator />
              ) : (
                <span>Salvar</span>
              )}
            </button>
          </ButtonsContainer>

          {loadingNewProductUpload && (
            <LoadingUploadWarningMessage className={poppins.className}>
              <span>carregando a imagem de seu produto</span>
            </LoadingUploadWarningMessage>
          )}

          {newProductLoading && (
            <LoadingUploadWarningMessage className={poppins.className}>
              <span>
                A criação do prato já foi solicitada, aguarde um momento!
              </span>
            </LoadingUploadWarningMessage>
          )}
        </form>
      </Main>
    </Container>
  );
}
