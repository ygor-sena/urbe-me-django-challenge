# Olá, seja bem-vindo a esta página! 👋🏻

## Introdução

Este README.md descreve sucintamente a implementação do projeto para um desafio que exigia a criação de uma aplicação web Django com pelo menos dois endpoints de API e uma consulta de dados.

Este projeto foi desenvolvido utilizando Ubuntu 22.04 em WSL (_Windows Subsystem for Linux_), entre 29 de setembro de 2023 e 1º de outubro de 2023.

## Sobre o processo de desenvolvimento

O desafio permite muitas implementações e escolhas de API diferentes. Para se ter algumas ideias, verifiquei primeiramente as [APIs públicas](https://github.com/public-apis/public-apis). Como as APIs do Google são diversas e bem documentadas, comecei a pesquisar mais sobre esse assunto na sequência. Posteriormente, encontrei um tutorial do freeCodeCamp.org sobre APIs Django + Google e decidi usar este projeto como referência durante a implementação do desafio.

Como o tutorial é de dois anos atrás, tive a oportunidade de aprender sobre boas práticas de código e desenvolvimento, pois algumas funções utilizadas como exemplo estavam obsoletas. Após finalizar a parte funcional do projeto, foquei no front-end e tentei deixá-lo parecido com o site [urbe.me](https://urbe.me/), usando a mesma fonte e paleta de cores semelhante.

Cada função possui um comentário sucinto de código para ajudar o leitor a entender o projeto com mais facilidade.

## Sobre o projeto

Este projeto é uma aplicação web origem-destino. O usuário insere dois endereços: um lugar de origem e um lugar de destino. O site irá gerar um mapa de rotas para carros, além de instruções de rota, duração e distância.

Para conseguir este feito, o projeto utiliza diversas APIs do Google, são elas, PlacesAPI, Directions API, Google Geocoding, Maps Javascript API e Distance Matrix API.

Os endereços são restritos apenas ao Brasil.

## Compilando, usando e executando o projeto

#### 1) Copie este repositório para sua estação de trabalho local

```html
git clone https://github.com/ygor-sena/urbe-me-django-challenge.git
```

Em seguida, acesse o repositório usando `cd <nome_da_pasta>`.

#### 2) Crie um ambiente virtual para executar o projeto

**Certifique-se de que sua máquina local tenha o comando `virtualenv` instalado.** Caso contrário, consulte este link antes de continuar: [Instalando pacotes usando pip e ambientes virtuais](https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/)

```html
cd urbe_me_django_challenge && ./run_script.sh
```

⚠️ Se você teve problemas com o módulo decouple, tente os dois comandos abaixo (veja [this link](https://www.datasciencelearner.com/importerror-cannot-import-name-config-from-decouple-solved/) para uma explicação mais detalhada):

```html
pip uninstall decouple
pip install python-decouple
```

#### 3) Execute o projeto

Dependendo da versão Python da sua máquina local, você pode executar os comandos abaixo usando `python` ou `python3`. Se sua versão for 3 ou superior, use `python3`.

```html
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver
```

#### 4) Inicie o aplicativo da web

Abra seu navegador favorito e digite o seguinte URL:

```html
https://localhost:8000
```

#### 5) Exemplo de uso

Digite um endereço de origem e um endereço de destino em seus respectivos campos para ser redirecionado a página do mapa e obter informações adicionais sobre a rota de destino.

## Imagens do projeto

![first+page](https://github.com/ygor-sena/urbe-me-django-challenge/assets/102881479/fc5ab18a-24a2-4054-91c4-9a05ceb2685e)

![mapa](https://github.com/ygor-sena/urbe-me-django-challenge/assets/102881479/db6c7c00-7c7a-49ce-9e68-db52555341c8)

![final](https://github.com/ygor-sena/urbe-me-django-challenge/assets/102881479/e2f80ce2-3e00-4bd1-ab12-70d9bc102811)


## Ferramentas usadas

- VSCode + WSL Ubuntu 22.04 para ambiente de desenvolvimento
- GitHub para armazenar código-fonte
- [Effie](https://www.effie.pro/) para compilar referências, anotar e visualizar ideias

## Conceitos aprendidos durante o processo

- Como gerar uma chave de API do Google no Google Cloud
- Como usar PlacesAPI, Directions API, Google Geocoding, Maps Javascript API e Distance Matrix API
- Fundamentos de Django, HTML, CSS e JavaScript
- Uso do inspetor do navegador para fins de depuração e melhoria de código
- Possibilidade de documentação do Django utilizando a ferramenta Sphinx

## Pensamentos finais

Gostei muito de trabalhar neste projeto porque pude aprofundar ainda mais algumas habilidades fundamentais em desenvolvimento web usando o framework Django. Assim, pude conhecer mais sobre as APIs do Google e como utilizá-las juntas em uma aplicação. Obrigada por esta oportunidade!

## Observações

Este projeto contém minha chave de API para acesso aos recursos do Google. Apesar da recomendação ser o não compartilhamento, mantive-a para facilitar o usuário durante a compilação do projeto em sua máquina local. Assim, que este repositório for avaliado, esta chave será removida por motivos de segurança. 

## Referências do Projeto

Para obter algumas ideias sobre APIs gratuitas: https://github.com/public-apis/public-apis
Para aprender como usar APIs do Google + Django:
[Python Django e APIs do Google - Tutorial do projeto](https://www.youtube.com/watch?v=_vCT42vDfgw) por freeCodeCamp.org
