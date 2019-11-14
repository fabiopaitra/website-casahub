<template lang="pug">
main.columns
  article.column
    figure.image.is-square.is-hidden-desktop
    //   img(src="../assets/images/seo-para-alavancar-sua-pequena-empresa.jpg", alt="O que é SEO e dicas rápidas e práticas")
    // figure.image.is-3by1.is-hidden-touch
    //   img(src="../assets/images/seo-para-alavancar-sua-pequena-empresa.jpg", alt="O que é SEO e dicas rápidas e práticas")
    .column.has-background-light
      nav.breadcrumb(aria-label='breadcrumbs').container
        ul(itemscope='', itemtype='http://schema.org/BreadcrumbList')
          li(itemprop='itemListElement', itemscope='', itemtype='http://schema.org/ListItem')
            router-link(:to="{ name: 'Home' }", itemprop='item', href='https://s21digital.com')
              span(itemprop='name') Home
            meta(itemprop='position', content='1')
          li.is-active(itemprop='itemListElement', itemscope='', itemtype='http://schema.org/ListItem')
            a(aria-current='page', itemprop='item', href='https://s21digital.com/como-classificar-site-primeira-posicao-google' )
              span(itemprop='name') SEO para sua pequena empresa
            meta(itemprop='position', content='2')
    header.container.section
      h1.title.has-text-primary.is-size-2 SEO para sua pequena empresa (2019)
      p.subtitle.is-size-4.is-italic.is-secondary.has-text-grey Cinco ações rápidas para alavancar o tráfego do seu website.
    section.container.column.content
      p Primeiro, vamos aumentar a velocidade de carregamento do seu site. O Google confirmou publicamente que usa a velocidade de carregamento do seu site como um fator de classificação. E a partir de meus próprios experimentos, descobri que a velocidade do site afeta os rankings, mas não da maneira que você pensa. A maioria das pessoas acha que o Google recompensa você por ter um site de carregamento rápido, mas isso não é verdade.
      p Meus experimentos de SEO revelaram que o Google não recompensa sites de carregamento rápido. Mas ao contrário, ele penaliza sites de carregamento lento. Isso faz sentido se você parar para pensar. O trabalho número um do Google é oferecer aos usuários o melhor resultado para uma determinada pesquisa. E todos, e eu quero dizer que todo mundo odeia sites de carregamento lento.
      p Então, se o seu site for mais lento do que o Rubinho, sim, o Google vai rebaixá-lo. Mas quando você atinge um certo limite de velocidade, você está no mesmo nível da maioria das outras páginas na internet. Portanto, o Google não vê nenhum motivo para classificá-lo como superior. Faz sentido?
        p Boa. Agora é hora de melhorar a velocidade de carregamento do seu site.
        ul
          li Primeiro, vá para o Google PageSpeed ​​Insights. Insira a página do seu site. Agora, como uma dica profissional, não coloque automaticamente sua página inicial nesse campo. Em vez disso, insira uma página interna do seu site que receba muito tráfego, como uma postagem no blog ou produto. Dessa forma, você obterá informações em uma página que muitos de seus visitantes realmente verão.
          li Em seguida, clique em Analisar e o Google mostrará onde o código da sua página poderia usar um ajuste. Agora a ferramenta do Google é útil, mas tem um grande problema. Não mede a velocidade de carregamento real de um site. Em vez disso, o Google PageSpeed ​​Insights simplesmente analisa o código da sua página.
          li 
            | Para ter uma noção mais precisa de como seu site é carregado para usuários reais, confira 
            a(href="https://gtmetrix.com" title="gtmetrix.com" target="_blank")
              span.icon
                i.mdi.mdi-external-link
              span gtmetrix.com. 
            | O Gtmetrix mostrará dados sobre como sua página realmente é carregada para os usuários da vida real, o que é uma medida muito mais precisa de como a velocidade do seu site se acumula.


    section.container.column.content
      h2.is-light 1. Site Velocidade de carregamento 
      p Primeiro, vamos aumentar a velocidade de carregamento do seu site. O Google confirmou publicamente que usa a velocidade de carregamento do seu site como um fator de classificação. E a partir de meus próprios experimentos, descobri que a velocidade do site afeta os rankings, mas não da maneira que você pensa. A maioria das pessoas acha que o Google recompensa você por ter um site de carregamento rápido, mas isso simplesmente não é verdade. Meus experimentos de SEO revelaram que o Google não recompensa sites de carregamento rápido. Penaliza sites de carregamento lento. Isso faz sentido se você pensar sobre isso.
      p O trabalho número um do Google é oferecer aos usuários o melhor resultado para uma determinada pesquisa. E todos, e eu quero dizer que todo mundo odeia sites de carregamento lento. Carregando a página. (música techno) Finalmente carregou. Então, se o seu site for mais lento do que o melaço, sim, o Google vai rebaixá-lo. Mas quando você atinge um certo limite de velocidade, você está no mesmo nível da maioria das outras páginas na internet. Portanto, o Google não vê nenhum motivo para classificá-lo como superior. Faz sentido? Boa. Agora é hora de melhorar a velocidade de carregamento do seu site.
      p Primeiro, vá para o Google PageSpeed ​​Insights. Digite uma página do seu site aqui. Agora, como uma dica profissional, não coloque automaticamente sua página inicial nesse campo. Em vez disso, insira uma página interna do seu site que receba muito tráfego, como uma postagem no blog ou um artigo. Dessa forma, você obterá informações em uma página que muitos de seus visitantes realmente verão. Em seguida, clique em Analisar e o Google mostrará onde o código da sua página poderia usar um ajuste. Agora a ferramenta do Google é útil, mas tem um grande problema. Não mede a velocidade de carregamento real de um site. A sério. Em vez disso, o Google PageSpeed ​​Insights simplesmente analisa o código da sua página. Para ter uma noção mais precisa de como seu site é carregado para usuários reais, confira gtmetrix.com. O Gtmetrix mostrará dados sobre como sua página realmente é carregada para os usuários da vida real, o que é uma medida muito mais precisa de como a velocidade do seu site se acumula.
    section.container.column.content
      h2 2. Techinal SEO
      p Em seguida, é hora de verificar o seu SEO técnico. Aqui está o acordo. Você pode ter o melhor site com o melhor conteúdo, mas se o seu site tiver sérios problemas técnicos de SEO, você não será classificado. Felizmente, identificar e corrigir esse tipo de problema pode ser super fácil. Veja como fazer isso.
      p Seu primeiro passo é fazer login na sua conta do console de pesquisa do Google. Preste especial atenção à seção Erros de rastreamento. Se você vir algum problema com DNS, conectividade do servidor ou robots.text, isso é algo que você deseja corrigir o mais rápido possível. Mas se todos mostrarem uma marca de verificação verde, tudo estará definido. Em seguida, clique no botão Erros de rastreamento.
      p Isso levará você à seção de erros de URL do console de pesquisa. É perfeitamente correto ter alguns erros de servidor e 404s. Mas se você ver centenas de erros aqui, isso é algo que você vai querer corrigir o mais rápido possível. Seguindo em frente, temos o nosso terceiro passo neste tutorial de SEO, que é a pesquisa de palavras-chave. Aqui estão três técnicas rápidas para encontrar palavras-chave incríveis. Primeiramente, temos o Google Suggest. Para usá-lo, insira uma palavra-chave no Google, mas não pressione Enter. O Google sugere palavras-chave de cauda longa que você pode segmentar.
      p E quando o Google sugere uma palavra-chave específica para você, você sabe que é uma palavra-chave que muitas pessoas pesquisam. Você também pode usar a ferramenta de sugestões muito útil para ver centenas delas sugerindo palavras-chave em um só lugar. Agora, às vezes, a melhor palavra-chave é um termo que você já classifica. O que eu quero dizer? Estou falando de encontrar palavras-chave inexploradas no console de pesquisa do Google. Aqui está exatamente como é feito. Primeiro, faça login na sua conta do console de pesquisa do Google e clique em Search Analytics. Classifique os resultados por posição. Em seguida, desloque-se até chegar às posições 11 a 15.
      p Estas são palavras-chave que você já está classificando para a segunda página, e com alguns extra na página e fora da página ajuda SEO você pode levá-los para a primeira página muito danado rapidamente. Mostrarei exatamente como fazer isso mais adiante neste vídeo. Nossa última técnica de pesquisa de palavras-chave é usar o SEMrush. SEMrush é a minha ferramenta favorita de pesquisa de palavras-chave. Aqui está o porquê.
      p Com a maioria das ferramentas de pesquisa de palavras-chave, você insere uma palavra-chave na ferramenta e recebe uma lista de sugestões. Mas o SEMrush é único. Em vez de inserir uma palavra-chave seminal na ferramenta, você entra no site de um concorrente e o SEMrush mostra todas as palavras-chave que elas já classificam.
    section.container.column.content
      h2 3. Desenvolvimento de Conteúdo
      p Em seguida, temos o desenvolvimento de conteúdo. No passado, o Google recompensava sites que publicavam muitos conteúdos exclusivos de qualidade. É por isso que tantos blogs começaram a produzir posts medíocres de 400 palavras.
      p Mas a verdade é essa. O todo publicar muita abordagem de conteúdo exclusivo simplesmente não funciona mais. Hoje, o objetivo número 1 do Google é mostrar a seus usuários o melhor resultado para uma determinada palavra-chave, o que significa que eles não se importam com quantos itens de conteúdo seu site publica ou com que frequência você publica. Por exemplo, meu site, o backlinko.com tem apenas 34 posts no total, e eu classifico para palavras-chave super competitivas, como pesquisa de palavras-chave e técnicas de SEO. Então, se publicar lotes de conteúdo exclusivo não funcionar, o que? Publicação com menos frequência, mas fazendo com que cada parte do conteúdo que você publica seja absolutamente incrível. Veja como criar conteúdo incrível e louco.
      p Primeiro, torne seu conteúdo insanamente acionável. Há alguns anos, o Dr. Jonah Berger, da Universidade da Pensilvânia, conduziu um estudo para descobrir o que tornava o conteúdo online viral. Então o que ele encontrou? O Dr. Berger descobriu que o conteúdo altamente prático tinha 34% mais chances de se tornar viral do que o conteúdo que não continha informações práticas. Por exemplo, minha postagem 21 Técnicas de SEO que você pode usar agora contém 21 dicas práticas de SEO.
      p E esse post altamente prático gerou milhares de compartilhamentos sociais e centenas de backlinks. Esta página também classifica no top três do Google para as técnicas de SEO palavra-chave. Em seguida, você quer ter certeza de que seu conteúdo tenha pelo menos 1.890 palavras. Sim, isso pode ir contra a sabedoria convencional. Afinal, você pode ter ouvido que as pessoas não lerão nada on-line que tenha mais de 500 palavras. Mas tenho dados para provar que isso simplesmente não é verdade. Na verdade, no ano passado eu me uni a um grupo de empresas de software SEO para realizar o maior estudo de fator de classificação de todos os tempos. No total, analisamos um milhão de resultados de pesquisa do Google e descobrimos que um conteúdo maior superou significativamente as publicações curtas do blog. Na verdade, descobrimos que o resultado médio da primeira página no Google era de 1.890 palavras. Você se lembra que as técnicas de SEO postam que mencionei anteriormente? Além de ser muito prático, o post também é super longo. Na verdade, esse post de mais de 4.000 palavras.
    section.container.column.content
      h2 4. Infographics
      p Em seguida, você vai querer fazer infográficos parte do seu marketing de conteúdo. O BuzzSumo fez seu próprio estudo sobre o que faz o conteúdo se tornar viral e descobriu que os infográficos obtêm uma média de 2,3 vezes mais compartilhamentos do que outros formatos de conteúdo. Eu encontrei o mesmo das minhas próprias experiências. Por exemplo, este post no On-Page SEO contém um grande infográfico antigo, e essa é uma das razões pelas quais esse conteúdo é compartilhado e vinculado a algo como um louco.
    section.container.column.content
      h2 5. Onpage SEOSEO
      p Falando dena página, agora que você publicou uma incrível parte do conteúdo longo do formulário, é hora de otimizá-lo em torno de sua palavra-chave alvo. Veja como. Primeiro, certifique-se de publicar sua página em um URL curto. Nosso estudo de fator de classificação descobriu que os URLs curtos tendiam a superar URLs longos.
      p Por exemplo, minha palavra-chave de destino para esta página é ferramentas de SEO, então eu criei meu URL simplesmente como SEO-Tools. Observe que minha URL também contém minha palavra-chave segmentada. Isso também é importante para o SEO na página.
      p Em seguida, inclua sua palavra-chave alvo uma vez nas primeiras 100 palavras do seu artigo. Por quê? O Google atribui mais peso às palavras-chave que aparecem no topo da sua página. Então, para ajudar o Google a entender o que é sua página, inclua sua palavra-chave uma vez nas primeiras 100 palavras da sua página.
      p Por exemplo, no meu post SEO Tools você pode ver que eu usei minha palavra-chave alvo logo de cara. Nossa última dica de SEO na página é adicionar links externos à sua página. O Google quer ver que seu conteúdo é um recurso abrangente sobre esse tópico, e isso só é possível se você vincular outras partes úteis do conteúdo. De fato, um estudo recente do setor descobriu que as páginas que vinculam consistentemente as páginas que não são vinculadas a outros sites.
    section.container.column.content
      h2 6. Backlinks
      p Ok, então você acabou de publicar o seu pedaço de conteúdo otimizado, então está tudo pronto, certo? Errado. Publicação agora. Hora de relaxar. Ah droga, esqueci o link building. De muitas maneiras, depois de publicar um conteúdo, seu trabalho acaba de começar. Isso porque é hora da parte mais importante do SEO, da promoção de conteúdo e do link building. Existem mil maneiras de criar links para o seu site, por isso vou compartilhar com você um dos meus favoritos absolutos agora.
      p Edifício da ligação quebrada. Aqui está o processo de três etapas. Primeiro passo, encontre uma página da qual você deseja obter um link. Etapa dois, encontre os links quebrados nessa página.
      p Etapa três, informe ao proprietário do site sobre o link quebrado. Vamos acabar com isso. Seu primeiro passo é encontrar uma página da qual você deseja obter um link. Esta página deve ser de um site em seu nicho que tem alguns links externos. Para encontrar páginas com muitos links externos, use as sequências de pesquisa, como palavra-chave e recursos úteis, e palavra-chave inurl: links. Isso trará páginas com muitos links externos. Em seguida, é hora de encontrar links quebrados nessa página. Você pode encontrar links que não estão funcionando instalando a extensão gratuita Check My Links para o Chrome. Então, quando você encontrar uma página com muitos links externos, execute Check My Links. Ele irá revelar todos os links nessa página que não estão funcionando.
      p Finalmente, é hora de informar o proprietário do site sobre o link quebrado e oferecer seu conteúdo como um substituto. Aqui está o script exato para enviar. Oi nome Eu estava procurando por algumas informações sobre o assunto hoje, quando me deparei com sua lista de recursos. Coisas boas. Eu não pude deixar de notar que havia um link quebrado na página. Eu apenas pensei que você gostaria de saber. Além disso, publiquei recentemente um guia sobre esse tópico. Pode fazer uma boa adição à sua página. De qualquer forma, mantenha o excelente trabalho e pronto.
    section.container.column.content
      h2 7. RankBrain Por
      p último, eu tenho uma dica de bônus para você, que é otimizar seu site em torno de sinais de experiência do usuário. Em 2015, o Google anunciou que agora usa um algoritmo de aprendizado de máquina chamado RankBrain. Mesmo que o Google tenha sido silencioso sobre os detalhes de exatamente o que o RankBrain faz, Larry Kim, do Wordstream, descobriu como o RankBrain provavelmente funciona. De acordo com seus dados, o RankBrain mede como os usuários interagem com seu site na Pesquisa do Google e classifica você parcialmente com base nesses sinais de experiência do usuário.
      p Por exemplo, Larry notou uma correlação clara entre taxa de cliques e classificações orgânicas. Especificamente, ele descobriu que as páginas com CTR alto tendiam a ultrapassar as páginas com uma taxa de cliques abaixo da média. Em outras palavras, o RankBrain provavelmente mede a CTR e usa esses dados como um fator chave de classificação.
      p Larry também descobriu que as páginas com uma taxa de rejeição abaixo de 76% tendem a se classificar melhor. Isso porque o RankBrain também analisa a frequência com que as pessoas retornam do seu site. Obviamente, quanto menor a taxa de rejeição, melhor. Se você quer aprender como melhorar sua taxa de cliques, confira este vídeo. E se você quiser ver como evitar que as pessoas saltem do seu site, este vídeo é para você. Ok, é isso para o meu tutorial avançado de SEO. Se você gostou deste vídeo, inscreva-se no meu canal agora mesmo. Basta clicar no botão Inscrever-se.
      p Além disso, se você quiser técnicas exclusivas de SEO que eu só compartilho com os assinantes, vá até o backlinko.com e inscreva-se no boletim informativo. É grátis. Agora é hora de ouvir de você. Qual das estratégias deste vídeo você vai usar primeiro? Você vai melhorar a velocidade do seu site? Ou tente o link building quebrado? Deixe-me saber deixando um comentário abaixo agora. Então, você sabe o que estou dizendo? Tão mal que é bom, tudo bem. Wundervar Eu poderia esquecer, vai como (swooping). Eu gosto de comer isso. Tempo de vácuo, tempo de construção. Isso é ridículo, novamente, parece insano. 






















  

</template>
