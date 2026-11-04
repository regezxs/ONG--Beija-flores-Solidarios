# Site institucional - Beija-Flores Solidários

## 1. ONG escolhida

A **Beija-Flores Solidários** atua em São Paulo no apoio a pessoas em situação de vulnerabilidade social. Segundo sua apresentação institucional, o projeto surgiu em 2007 como Noites Solidárias e passou a utilizar o nome Beija-Flores Solidários.

Sua atuação se organiza em três pilares: **segurança alimentar, reinserção social por meio da capacitação profissional e estímulo ao voluntariado**. O público inclui pessoas em vulnerabilidade social, centros de acolhimento e abrigos.

A instituição divulga ações de assistência, cursos, práticas esportivas, bazar e oportunidades de colaboração. A sede é conhecida como **Ninho**. O nome da ONG remete à história do beija-flor que faz sua parte e inspira a participação coletiva.

Fonte: [apresentação institucional da ONG](https://www.beijafloressolidarios.org.br/quemsomos.html). Atividades, necessidades e disponibilidade devem ser confirmadas nos canais oficiais.

## 2. Objetivo do projeto

Apresentar a causa, a história, o público atendido e as iniciativas da ONG por meio de um site responsivo e interativo, com navegação clara e linguagem simples. O projeto também busca orientar possíveis voluntários e apoiadores e demonstrar os conteúdos de HTML, CSS e JavaScript estudados em sala.

A identidade visual utiliza os verdes **#148100** e **#176509**, encontrados no site institucional, combinados com fundo claro para facilitar a leitura.

## 3. Integrantes da equipe e suas responsabilidades 


| Integrante | Nome completo | Responsabilidades / contribuição |
| --- | --- | --- |
| 1 | Guilherme Souza Lima | JavaScript|
| 2 | Letícia Valentim Reges | HTML5 |
| 3 | João Victor Moidano do Valle | JavaScript |
| 4 | Gabriel Sartori | CSS3 |
| 5 | Isadora do Nascimento Takami | CSS3 |
| 6 | Beijamin | HTML5 |
| 7 | Matheus Fernandes Andrade  | CSS3 |
| 8 | Guilherme Cau Guateli | HTML5 |

## 4. Páginas do site

| Página | Arquivo | Conteúdo |
| --- | --- | --- |
| Início | `index.html` | Nome da ONG, causa, apresentação breve, imagem de destaque e chamadas para conhecer iniciativas e participar. |
| Sobre | `sobre.html` | História, missão, público atendido, objetivos e origem do nome. |
| Projetos | `projetos.html` | Três iniciativas com nome, descrição, imagem e indicação de como a comunidade pode contribuir. |
| Contato | `contato.html` | Canais institucionais, orientações de participação e formulário com nome, e-mail, assunto e mensagem, com aviso de envio simulado. |

As três iniciativas apresentadas são: **Alimento e cuidado nas ruas**, **Conhecimento para novas oportunidades** e **Um Ninho de encontros e participação**. Esses títulos organizam o conteúdo pesquisado e não representam nomes oficiais de programas da ONG.

As quatro páginas compartilham menu, identidade visual e rodapé com o nome da ONG. Os avisos acadêmicos e de envio simulado permanecem nas páginas em que estão presentes.

## 5. Duas funcionalidades JavaScript

O arquivo externo `js/script.js` implementa as duas funcionalidades obrigatórias.

### Formulário validado na página Contato

O evento `submit` é registrado com `addEventListener()`. A função `validarFormulario()` utiliza `preventDefault()` para impedir o envio e o recarregamento da página, lê os quatro campos com `value` e remove espaços das extremidades com `trim()`.

As regras são:

- **Nome:** pelo menos 3 caracteres após `trim()`.
- **E-mail:** obrigatório e em formato básico válido, verificado com `checkValidity()` no campo `type="email"`.
- **Assunto:** não pode estar vazio.
- **Mensagem:** pelo menos 10 caracteres após `trim()`.

Quando há erro, uma mensagem aparece no próprio HTML e o foco vai para o campo a corrigir. Quando todos os dados são válidos, aparece uma confirmação explícita de **envio simulado**, sem envio real ou armazenamento.

O formulário utiliza `novalidate` para que o evento seja tratado pelo JavaScript e as mensagens personalizadas sejam exibidas. Os campos mantêm os atributos HTML adequados, como `required` e `minlength`.

### Mostrar e ocultar orientações na página Projetos

O botão **“Como posso ajudar?”** possui um evento `click` registrado com `addEventListener()`. A função `alternarOrientacoes()` mostra ou oculta o painel de orientações utilizando a propriedade `hidden`.

O texto muda para **“Ocultar orientações”** quando o painel está aberto. O atributo `aria-expanded` acompanha o estado. A ação funciona em cliques sucessivos, sem recarregar a página.

## 6. Tecnologias e organização

- **HTML5:** estrutura e conteúdo, com `header`, `nav`, `main`, `footer`, títulos, imagens, links e formulário com labels associados.
- **CSS3:** identidade visual, box model, Flexbox, Grid, imagens adaptáveis e regra `@media` para modificar o layout em telas menores.
- **JavaScript:** funções, condições, eventos e alterações simples no DOM, com comentários nos trechos relevantes.

Não são utilizados frameworks, backend, banco de dados, login, pagamentos ou integrações de envio real.

```text
ONG--Beija-flores-Solidarios/
|-- index.html
|-- sobre.html
|-- projetos.html
|-- contato.html
|-- README.md
|-- css/
|   `-- estilos.css
|-- js/
|   `-- script.js
`-- img/
    `-- somente o logotipo e as imagens utilizadas nas páginas
```

## 7. Como executar

1. Baixe ou extraia a pasta completa do projeto.
2. Mantenha os arquivos HTML e as pastas `css`, `js` e `img` na mesma organização.
3. Abra `index.html` em um navegador atualizado.
4. Navegue pelas quatro páginas usando o menu.
5. Na página Projetos, teste o botão de orientações.
6. Na página Contato, preencha o formulário com dados fictícios e teste a validação.

Não é necessário instalar dependências, configurar banco de dados ou iniciar um servidor. O uso de Live Server é opcional.

## 8. Fontes e créditos

### Documentação da atividade

**Projeto_ONG_V2 (1).pdf**, versão 2, 10 páginas, autoria de **Marcelo de Freitas Pintaud**. Documento fornecido para o projeto integrador de Fundamentos da Web e Desenvolvimento Front-end, com valor de **4,00 pontos**.

### Conteúdo institucional

Fontes consultadas em **02/11/2026**:

- [Site oficial dos Beija-Flores Solidários](https://www.beijafloressolidarios.org.br/): apresentação e canais institucionais.
- [Quem Somos](https://www.beijafloressolidarios.org.br/quemsomos.html): história, missão, público, objetivos e origem do nome.
- [Cursos](https://www.beijafloressolidarios.org.br/cursos.html): atividades divulgadas e imagens da área de cursos.
- [Como Ajudar](https://www.beijafloressolidarios.org.br/comoajudar.html): doações, voluntariado e colaboração profissional.
- [Bazar](https://www.beijafloressolidarios.org.br/bazar.html): informações sobre os produtos e a iniciativa.

O conteúdo foi resumido e reescrito para fins acadêmicos. Informações históricas não são apresentadas como programação atual ou inscrições abertas.

### Logotipo e imagens

Arquivos disponibilizados no site institucional:

| Arquivo local | Fonte original |
| --- | --- |
| `img/logo.png` | [Logotipo](https://www.beijafloressolidarios.org.br/assets/images/logonovo-220x122.png) |
| `img/capa.jpg` | [Imagem ilustrativa de mãos reunidas](https://www.beijafloressolidarios.org.br/assets/images/background13-2000x1333.jpg) |
| `img/acoes.jpg` | [Imagem ilustrativa com água](https://www.beijafloressolidarios.org.br/assets/images/acoes-2000x1333.jpg) |
| `img/historia.jpg` | [Imagem ilustrativa de aprendizado](https://www.beijafloressolidarios.org.br/assets/images/beijaflorsolidario-quem-somos-2000x1333.jpg) |
| `img/culinaria.jpg` | [Imagem da área de culinária](https://www.beijafloressolidarios.org.br/assets/images/paniicacao-492x404.jpg) |
| `img/esporte.jpg` | [Imagem da área de treinamento](https://www.beijafloressolidarios.org.br/assets/images/treinamento-funcional-492x532.jpg) |
| `img/foto-1-482x470.jpeg` | [Beija-flor da página Quem Somos](https://www.beijafloressolidarios.org.br/assets/images/foto-1-482x470.jpeg) |

Crédito de disponibilização: **site institucional Beija-Flores Solidários**. A autoria individual e a licença de reutilização das imagens não foram identificadas. Confirmar autorização antes de divulgação pública. As imagens ilustrativas não são apresentadas como registros de pessoas atendidas pela ONG.
