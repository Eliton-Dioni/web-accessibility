# Acessibilidade na Web

A acessibilidade na web sempre foi de extrema importância, pensando nisso, em 1997 surgiu a WAI (Web Accessibility Initiative).

A WCAG (Web Content Accessibility Guidelines) busca introduzir uma série de diretrizes, padrões, recomendações e documentos que explicam como tornar a Web mais acessível para pessoas com deficiência.

## A WCAG se baseia em quatro princípios:

* **Perceptível**: As pessoas devem conseguir ver o conteúdo, ou ouvir.
* **Operável**: As pessoas devem conseguir usar o computador através do teclado, ou por voz.
* **Compreensível**: O conteúdo contém linguagem clara e simples para que as pessoas compreendam com facilidade.
* **Robusto**: As pessoas devem conseguir utilizar diversos tipos de tecnologias assistivas.

A WCAG 2.0 possui **61 critérios de sucesso**, enquanto a versão 2.1 possui 78. Esses [Critérios de Acessibilidade](https://www.w3.org/TR/WCAG21/) estão organizados em três níveis: A, AA e AAA, sendo que cada nível representa um grau maior de acessibilidade. O nível A possui 30 critérios básicos que são mais fáceis de serem atingidos. O nível AA, além desses, inclui mais 20 critérios de complexidade média. Já o nível AAA possui 28 critérios adicionais, que são mais complexos e muitas vezes difíceis de serem implementados, mas garantem um alto nível de acessibilidade. Uma versão 3.0, com requisitos adicionais, está prevista para 2024.

Esses critérios são importantes para garantir que o conteúdo da web seja acessível para pessoas com deficiência.

## 🧏 Um resumo com os principais critérios:
* **Linguagem Principal Definida**: O site deve ter a linguagem principal especificada no atributo `lang` do elemento HTML para ajudar tecnologias assistivas a identificar corretamente o idioma do conteúdo.
- **Alternativas de Texto para Imagens**: Todas as imagens devem ter um texto alternativo (`alt`) ou uma descrição equivalente (como `aria-label`) para garantir que o conteúdo visual seja acessível a usuários de leitores de tela.
- **Teclado Navegável**: Todos os elementos interativos (links, botões, formulários) devem ser acessíveis e utilizáveis apenas com o teclado, sem exigir o uso de um mouse.
- **Contraste de Cor Adequado**: Deve haver um contraste suficiente entre o texto e o fundo para garantir que o conteúdo seja legível para pessoas com deficiências visuais.
- **Formulários Acessíveis**: Campos de formulário devem ser claramente rotulados, e as instruções devem estar disponíveis para ajudar os usuários a preenchê-los corretamente. Elementos como `label` devem estar associados a seus respectivos campos.
- **Textos Legíveis**: O conteúdo deve ser escrito em linguagem simples e clara, e deve evitar jargões ou termos técnicos sem explicação.
- **Controle de Tempo**: Os usuários devem ter a possibilidade de ajustar ou desligar limites de tempo, se houver, para completar uma ação.
- **Feedback de Erros**: Quando ocorrer um erro em um formulário, a mensagem de erro deve ser clara e descritiva, informando ao usuário como corrigir o erro.
- **Content Adaptable**: O conteúdo deve ser capaz de ser apresentado de diferentes maneiras (por exemplo, com layout simples) sem perder informação ou estrutura.
- **Navegação Consistente**: A navegação deve ser consistente e previsível em todo o site, ajudando os usuários a encontrar informações e a saber onde estão dentro do site.
- **Compatibilidade com Tecnologias Assistivas**: O site deve ser compatível com leitores de tela e outras tecnologias assistivas, garantindo que todo o conteúdo possa ser acessado por esses meios.

🗒️ Importante observar que ícones que não tenham um sentido tão importante (como um ícone complementar por exemplo) podem acompanhar de um aria-hidden=true e um focusable=false.

### 🧩 Extensões:
* Axe-core testing
* eslint-plugin-a11y
* landmark [navigation]() via keyboard
* screen reader

[Radix UI](https://www.radix-ui.com/) é uma ótima biblioteca com elementos já acessíveis pré-programados
