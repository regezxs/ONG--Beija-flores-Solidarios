# Site institucional - Beija-Flores Solidários

Projeto integrador desenvolvido com **HTML5, CSS3 e JavaScript puro**, conforme a documentação **Projeto_ONG_V2 (1).pdf**, versão 2, de Marcelo de Freitas Pintaud.

> Proposta local de site institucional, preparada para apresentação e aprovação visual da ONG. Não houve publicação nem substituição do site atual. O formulário possui envio exclusivamente simulado: não envia mensagens nem coleta ou armazena dados.

A versão principal está na raiz deste repositório. A pasta `academico/` preserva uma versão anterior, identificada como protótipo acadêmico, para a apresentação ao professor. Ela possui seus próprios arquivos e README e não acompanha automaticamente as alterações da versão principal.

## 1. ONG escolhida

A **Beija-Flores Solidários** atua em São Paulo no apoio a pessoas em situação de vulnerabilidade social. Segundo sua apresentação institucional, o projeto surgiu em 2007 como Noites Solidárias e passou a utilizar o nome Beija-Flores Solidários.

Sua atuação se organiza em três pilares: **segurança alimentar, reinserção social por meio da capacitação profissional e estímulo ao voluntariado**. O público inclui pessoas em vulnerabilidade social, centros de acolhimento e abrigos.

A instituição divulga ações de assistência, cursos, práticas esportivas, bazar e oportunidades de colaboração. A sede é conhecida como **Ninho**. O nome da ONG remete à história do beija-flor que faz sua parte e inspira a participação coletiva.

Fonte: [apresentação institucional da ONG](https://www.beijafloressolidarios.org.br/quemsomos.html). Atividades, necessidades e disponibilidade devem ser confirmadas nos canais oficiais.

## 2. Objetivo do projeto

Apresentar a causa, a história, o público atendido e as iniciativas da ONG por meio de um site responsivo e interativo, com navegação clara e linguagem simples. O projeto também busca orientar possíveis voluntários e apoiadores e demonstrar os conteúdos de HTML, CSS e JavaScript estudados em sala.

A identidade visual utiliza os verdes **#148100** e **#176509**, encontrados no site institucional, combinados com fundo claro **#faf6ea** e detalhes em terracota **#a64b2a** para facilitar a leitura. As imagens atualmente exibidas vêm do site da ONG e das capas dos vídeos vinculados nele; nenhuma ilustração gerada por IA está em uso nos quatro HTML principais.

## 3. Integrantes da equipe

Preencher os nomes e as responsabilidades conforme a participação efetiva de cada integrante.

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
| Início | `index.html` | Apresentação, história em destaque, pilares, Ninho, caminhos de participação, registros históricos, capas de vídeos e chamada para participar. |
| Sobre | `sobre.html` | História, missão, público atendido, objetivos e origem do nome. |
| Projetos | `projetos.html` | Três iniciativas com imagens e formas de contribuição, cursos, bazar, memória de ações, campanhas e painel de orientações. |
| Contato | `contato.html` | Canais institucionais, orientações de participação e formulário com nome, e-mail, assunto e mensagem, com aviso de envio simulado. |

As três iniciativas apresentadas são: **Alimento e cuidado nas ruas**, **Conhecimento para novas oportunidades** e **Um Ninho de encontros e participação**. Esses títulos organizam o conteúdo pesquisado e não representam nomes oficiais de programas da ONG.

As quatro páginas principais compartilham menu, identidade visual e rodapé contendo somente o nome **Beija-Flores Solidários**. A identificação acadêmica está preservada na cópia em `academico/`.

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
|-- .gitignore
|-- academico/
|   `-- versão anterior para apresentação acadêmica, com README e recursos próprios
|-- css/
|   `-- estilos.css
|-- js/
|   `-- script.js
`-- img/
    |-- fontes-imagens.md
    `-- logotipo, fotografias, cartazes, capas e materiais de referência
```

## 7. Como executar

1. Baixe ou extraia a pasta completa do projeto.
2. Mantenha os arquivos HTML e as pastas `css`, `js` e `img` na mesma organização.
3. Abra `index.html` em um navegador atualizado.
4. Navegue pelas quatro páginas usando o menu.
5. Na página Projetos, teste o botão de orientações.
6. Na página Contato, preencha o formulário com dados fictícios e teste a validação.

Não é necessário instalar dependências, configurar banco de dados ou iniciar um servidor. O uso de Live Server é opcional.

## 8. Testes e revisão antes da entrega

- [x] Conferir os destinos do menu, links locais, âncoras, imagens e caminhos relativos por inspeção dos arquivos.
- [x] Conferir labels associados aos campos, textos alternativos e IDs únicos nos quatro HTML.
- [x] Conferir a sintaxe de `js/script.js` e de `academico/js/script.js`.
- [ ] Demonstrar a navegação real no navegador e conferir todas as páginas em **390 px** e **1280 px**, sem sobreposição ou rolagem horizontal indevida.
- [ ] Demonstrar o painel em cliques sucessivos e testar erros, espaços e confirmação do formulário na interface real.
- [ ] Conferir Tab, Enter/Espaço, foco visível e legibilidade no navegador.
- [ ] Extrair o ZIP em outra pasta e verificar o funcionamento.

**Verificações já realizadas:** sintaxe JavaScript, caminhos locais, estrutura semântica básica e lógica das duas interações em ambiente simulado. A revisão visual e os testes de interface no navegador real permanecem pendentes; o ambiente simulado não substitui essa conferência.

## 9. Fontes e créditos

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
| `img/ingles.jpg` | [Imagem da área de inglês](https://www.beijafloressolidarios.org.br/assets/images/aula-de-ingles-492x258.jpg), exibida em Início e Projetos. |

A tabela acima reúne os arquivos básicos. A relação completa das imagens atualmente exibidas, incluindo cartazes, materiais de colaboração, imagem de logística e capas dos dois vídeos, está em **[img/fontes-imagens.md](img/fontes-imagens.md)**.

O [Instagram da ONG](https://www.instagram.com/beijafloressolidarios/) permanece como canal de contato. Suas publicações não puderam ser consultadas publicamente nesta pesquisa; nenhuma imagem é creditada a esse perfil sem verificação.

Os arquivos `img/ilustracao-*.png` foram gerados em uma etapa anterior e retirados das páginas. Permanecem locais, ignorados pelo Git e dispensáveis para executar o site. Os prompts históricos permanecem documentados em `img/prompts-ilustracoes.md`.

Crédito de disponibilização: **site institucional Beija-Flores Solidários**. A autoria individual e a licença de reutilização das imagens não foram identificadas. Confirmar autorização antes de divulgação pública. As imagens ilustrativas não são apresentadas como registros de pessoas atendidas pela ONG.

## 10. Entrega e demonstração

Conforme o PDF, a entrega deve conter um **ZIP com os quatro HTML, CSS, JavaScript, imagens, demais recursos utilizados e este README**. Não incluir a pasta `.git`. Hospedagem online é opcional e não substitui o ZIP.

Na apresentação, a equipe deverá:

1. Explicar a causa, a missão e o público da ONG.
2. Navegar pelas quatro páginas.
3. Demonstrar a interação de mostrar e ocultar orientações.
4. Testar o formulário com erro e com dados válidos.
5. Mostrar a adaptação para celular e computador.
6. Explicar as funções de HTML, CSS e JS, justificando semântica, acessibilidade e pelo menos uma função, condição, evento e alteração do DOM.
7. Apresentar a contribuição de cada integrante.
