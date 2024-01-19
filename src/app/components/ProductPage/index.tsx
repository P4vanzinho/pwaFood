'use client';

import { bebas_neue, poppins } from '@/app/fonts';
import {
  Container,
  FormContainer,
  ImageProductContainer,
  SelectCategoryLabel,
  SelectContainer,
  DescriptionLabel,
  ToggleSwitchContainer,
  ToggleSwitch,
  LabelToglleSwitch,
  InputCheckBoxInToggle,
  Switch,
  ButtonsContainer,
  ImageWithoutUpload,
  ImageWithUpload,
} from './styles';

import Title from '@/app/components/Title';
import {
  ChangeEvent,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import Image from 'next/image';

import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Input from '@/app/components/Input';
import Button from '@/app/components/Button';
import useFoodFetch from '@/app/hooks/useFoodFetch';
import { EndpointFoodApiEnum } from '@/app/enums';
import { FoodApiCategory, FoodApiUpload } from '../../../../types/foodApi';
import AvatarEditor from 'react-avatar-editor';
import Dropzone from 'react-dropzone';

type ProductPageProps = {
  props?: {
    params?: {
      slug: string;
    };
  };

  businessId: number | string;
  mode?: 'private' | 'public';
};

export default function ProductPage({
  props,
  businessId,
  mode = 'private',
}: ProductPageProps) {
  const needsToken = mode === 'private';
  const modePage = props?.params?.slug ? 'edit' : 'register';

  const title =
    modePage === `register` ? `CADASTRO DE PRODUTO` : `EDIÇÃO DE PRODUTO`;

  const [foodTitle, setFoodTitle] = useState<string>(``);
  const textAreaMaxLength = 300;
  const [remaining, setRemaining] = useState<number>(textAreaMaxLength);
  const [checked, setChecked] = useState<boolean>(false);
  const [price, setPrice] = useState<string>('');
  const [priceIsValid, setPriceIsValid] = useState<boolean>(false);
  const [description, setDescription] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [categorySelected, setCategorySelected] = useState<
    FoodApiCategory | undefined
  >(undefined);

  const [uploadName, setUploadName] = useState<string | undefined>('');
  const [isUploadedImage, setIsUploadedImage] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);

  const emptyingValues = () => {
    setFoodTitle(``);
    setChecked(false);
    setPrice(``);
    setDescription(``);
    setCategory(``);
    setCategorySelected(undefined);
    setUploadName(``);
    setIsUploadedImage(false);
    setFile(null);
  };

  useEffect(() => {
    if (!file) return;

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

    console.log(`upload`, upload);
  }, [file]);

  //Categories request
  const { data: categories } = useFoodFetch<FoodApiCategory[]>(
    EndpointFoodApiEnum.PRODUCT_CATEGORY,
    {
      injectProducts: true,
      hasProducts: true,
      businessId,
    },
    needsToken,
  );

  //Upload request
  const {
    request: requestNewProductUpload,
    loading: loadingNewProductUpload,
    data: upload,
  } = useFoodFetch<FoodApiUpload>();

  //Register product request
  const { request: requestRegisterNewProduct, loading: newProductLoading } =
    useFoodFetch();

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

  function onChangeUploadFile(acceptedFiles: File[]) {
    const selectedFile = acceptedFiles[0];

    setFile(selectedFile || null);
  }

  function handleRemoveUpload() {
    setUploadName('');
    setIsUploadedImage(() => false);
  }

  function handleNewProduct() {
    requestRegisterNewProduct({
      method: 'POST',
      body: {
        categoryId: categorySelected?.id,
        name: foodTitle,
        price,
        description,
        uploadId: upload?.id,
        enabled: checked,
      },
      endPoint: EndpointFoodApiEnum.PRODUCT,
    });

    emptyingValues();
  }

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    handleNewProduct();
  }

  //Selecionando categoria
  useEffect(() => {
    if (categories && categories.length === 1) {
      setCategory(() => categories[0].name);
    }
    const foundCategory = categories?.find(prev => prev.name === category);

    setCategorySelected(foundCategory);
  }, [categories, category, categorySelected]);

  useEffect(() => {
    if (!file) return;
    setIsUploadedImage(() => true);
    setUploadName(upload?.name);

    console.log(`upload`, upload);
  }, [upload]);

  useEffect(() => {
    if (!file) return;

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

    console.log(`upload`, upload);
  }, [file]);

  return (
    <Container>
      <FormContainer>
        <Title>{title}</Title>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <Input
              label="TITULO"
              className={poppins.className}
              id="foodTitle"
              type="text"
              placeholder="Dê um título ao seu produto"
              onChange={e => setFoodTitle(e.target.value)}
              value={foodTitle}
            />
            {/* </FoodTitleLabel> */}

            {isUploadedImage ? (
              <ImageProductContainer>
                <ImageWithUpload>
                  <p className={poppins.className}>
                    Como será visualizado pelo cliente
                  </p>

                  <AvatarEditor
                    image={`https://fooda.nyc3.digitaloceanspaces.com/develop/${uploadName}`}
                    height={127}
                    width={127}
                    scale={1}
                    className="canvasDimensions"
                  />

                  <div>
                    <button className={poppins.className}> EDITAR</button>
                    <button
                      className={poppins.className}
                      onClick={handleRemoveUpload}
                    >
                      REMOVER
                    </button>
                  </div>
                </ImageWithUpload>
              </ImageProductContainer>
            ) : (
              <Dropzone
                noKeyboard
                onDrop={acceptedFiles => onChangeUploadFile(acceptedFiles)}
              >
                {({ getRootProps, getInputProps }) => (
                  <ImageProductContainer {...getRootProps()}>
                    <ImageWithoutUpload>
                      <Image
                        src={'/productImage.png'}
                        alt="Imagem exemplo"
                        height={51}
                        width={51}
                      />
                      <p className={poppins.className}>Arraste uma imagem</p>
                      <div>
                        <div></div>
                        <span className={poppins.className}>ou</span>
                        <div></div>
                      </div>
                      <button className={poppins.className}>
                        <input
                          onChange={onChangeUploadFile}
                          type="file"
                          {...getInputProps()}
                        />
                        Selecione do computador
                      </button>
                    </ImageWithoutUpload>
                  </ImageProductContainer>
                )}
              </Dropzone>
            )}

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
                  {/*obs: testar o que realmente e necessario nesses ifs*/}
                  {businessId &&
                    categories &&
                    categories?.map(category => (
                      <option key={category.id} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                </select>
                <MdOutlineKeyboardArrowDown size={24} />
              </SelectContainer>
            </SelectCategoryLabel>
            <DescriptionLabel
              htmlFor="description"
              className={bebas_neue.className}
            >
              DESCRICAO
              <div>
                <textarea
                  value={description}
                  id="description"
                  maxLength={textAreaMaxLength}
                  className={poppins.className}
                  onInput={handleTextAreaLength}
                  onChange={event => setDescription(event.target.value)}
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

            <Input
              className={poppins.className}
              id="price"
              type="text"
              placeholder="Exemplo: 15,25"
              onChange={e => setPrice(e.target.value)}
              value={price}
              onInput={handleInputPrice}
            />

            {priceIsValid && (
              <span> O preco de seu prato precisa ser um número</span>
            )}
          </fieldset>

          <ButtonsContainer>
            <Button text={`Cancelar`} />
            <Button text={`Salvar`} type="submit" />
          </ButtonsContainer>
        </form>
      </FormContainer>
    </Container>
  );
}
