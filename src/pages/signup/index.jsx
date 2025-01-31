// import { useNavigate  } from "react-router-dom";
// import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
// import { Button } from '../../components/Button';
// import { Header } from '../../components/Header';
// import { Input } from '../../components/Input';
// import { api } from '../../services/api';
// import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";

// import { Container, Title, Column, TitleLogin, SubtitleLogin, CriarText, TenhoContaText, Row, Wrapper } from './styles';

// const Signup = () => {

//     const navigate = useNavigate()

//     const { control, handleSubmit, formState: { errors  } } = useForm({
//         reValidateMode: 'onChange',
//         mode: 'onChange',
//     });

//     const onSubmit = async (formData) => {
//         try{
//             const {data} = await api.get(`/users?email=${formData.email}&senha=${formData.senha}`);

//             if(data.length && data[0].id){
//                 navigate('/feed')
//                 return
//             }

//             alert('Usuário ou senha inválido')
//         }catch(e){
//             //TODO: HOUVE UM ERRO
//         }
//     };

//     console.log('errors', errors);

//     return (<>
//         <Header />
//         <Container>
//             <Column>
//                 <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
//                  e entrar mais rápido nas empresas mais desejadas.</Title>
//             </Column>
//             <Column>
//                 <Wrapper>
//                 <TitleLogin>Começe agora grátis</TitleLogin>
//                 <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                     <Input placeholder="Nome completo"  leftIcon={<MdPerson />} name="nome" control={control} />
//                     {errors.nome && <span>Nome é obrigatório</span>}
//                     <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
//                     {errors.email && <span>E-mail é obrigatório</span>}
//                     <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
//                     {errors.senha && <span>Senha é obrigatório</span>}
//                     <Button title="Criar conta" variant="secondary" type="submit"/>
//                 </form>
//                 <Row>
//                     <SubtitleLogin>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SubtitleLogin>
//                 </Row>
//                 <Row>
//                     <TenhoContaText>Já tenho conta.</TenhoContaText>
//                     &nbsp;
//                     <Link to="/login" style={{ textDecoration: 'none' }}>
//                         <CriarText>Fazer login</CriarText>
//                     </Link>
//                 </Row>
//                 </Wrapper>
//             </Column>
//         </Container>
//     </>)
// }

// export { Signup }
import React from "react";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import {
  Container,
  Title,
  Column,
  TitleSignup,
  SubtitleSignup,
  CriarText,
  TenhoContaText,
  Row,
  Wrapper,
} from "./styles";

const Signup = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
    mode: "onChange",
  });

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.post("/users", {
        nome: formData.nome,
        email: formData.email,
        senha: formData.senha,
      });

      alert("Erro ao criar conta");
    } catch (e) {
      console.error("Houve um erro", e);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleSignup>Começe agora grátis</TitleSignup>
            <SubtitleSignup>Crie sua conta e make the change._</SubtitleSignup>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder="Nome completo"
                leftIcon={<MdPerson />}
                name="nome"
                control={control}
              />
              {errors.nome && <span>Nome é obrigatório</span>}
              <Input
                placeholder="E-mail"
                leftIcon={<MdEmail />}
                name="email"
                control={control}
              />
              {errors.email && <span>E-mail é obrigatório</span>}
              <Input
                type="password"
                placeholder="Senha"
                leftIcon={<MdLock />}
                name="senha"
                control={control}
              />
              {errors.senha && <span>Senha é obrigatório</span>}
              <Button title="Criar minha conta" variant="secondary" type="submit" />
            </form>
            <Row>
              <SubtitleSignup>
                Ao clicar em "criar minha conta grátis", declaro que aceito as
                Políticas de Privacidade e os Termos de Uso da DIO.
              </SubtitleSignup>
            </Row>
            <Row>
              <TenhoContaText>Já tenho conta.</TenhoContaText>
              &nbsp;
              <Link to="/login" style={{ textDecoration: "none" }}>
                <CriarText>Fazer login</CriarText>
              </Link>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Signup };
