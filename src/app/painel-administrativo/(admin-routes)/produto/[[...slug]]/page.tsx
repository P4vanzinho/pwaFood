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
  PriceLabel,
} from './styles';

import Title from '@/app/components/Title';
import { ChangeEvent, useState } from 'react';
import Image from 'next/image';

import { FileUploader } from 'react-drag-drop-files';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Input from '@/app/components/Input';
import Button from '@/app/components/Button';

type ProductProps = {
  params: {
    slug: string;
  };
};

export default function Product(props: ProductProps) {
  const mode = props?.params?.slug ? 'edit' : 'register';
  const title =
    mode === `register` ? `CADASTRO DE PRODUTO` : `EDIÇÃO DE PRODUTO`;

  const [foodTitle, setFoodTitle] = useState<string>(``);

  const textAreaMaxLength = 300;
  const [remaining, setRemaining] = useState<number>(textAreaMaxLength);
  const [checked, setChecked] = useState<boolean>(false);
  const [price, setPrice] = useState<string>('');
  const [priceIsValid, setPriceIsValid] = useState<boolean>(false);

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

  return (
    <Container>
      <FormContainer>
        <Title>{title}</Title>
        <fieldset>
          {/* <FoodTitleLabel htmlFor="foodTitle" className={bebas_neue.className}>
            Titulo */}
          {/* <input
              className={poppins.className}
              type="text"
              placeholder="De um titulo a sua categoria"
              onChange={e => setFoodTitle(e.target.value)}
              value={foodTitle}
              id="title"
              required
            /> */}

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
          <FileUploader
          // handleChange={OnChangeUploadFile}
          // name="file"
          // types={fileTypes}
          >
            <ImageProductContainer>
              <Image
                src="/productImage.png"
                alt=""
                height={51}
                width={51}
              ></Image>

              <p className={poppins.className}>Arraste uma imagem</p>

              <div>
                <div></div>
                <span className={poppins.className}>ou</span>
                <div></div>
              </div>

              <button
                // disabled={`!loadingNewProductUpload`}
                className={poppins.className}
              >
                <input
                  type="file"
                  // onChange={e => {
                  //   const selectedFile = e.target.files && e.target.files[0];
                  //   if (selectedFile) {
                  //     OnChangeUploadFile(selectedFile);
                  //   }
                  // }}
                />
                Selecione do computador
              </button>
            </ImageProductContainer>
          </FileUploader>
          <SelectCategoryLabel
            htmlFor="foodCategory"
            className={bebas_neue.className}
          >
            SELECIONE EM QUAL CATEGORIA ESTE PRODUTO SERA EXIBIDO
            <SelectContainer>
              <select
                className={poppins.className}
                // value={category}
                id="foodCategory"
                // onChange={e => setCategory(e.target.value)}
              >
                <option></option>
                {/* {businessId &&
                  categories &&
                  categories?.map(category => (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  ))} */}
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
              <p className={poppins.className}>Exibir o produto no cardapio</p>
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
          <Button text={`Salvar`} />
        </ButtonsContainer>
      </FormContainer>
    </Container>
  );
}
