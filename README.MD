# Countdown Timer Component

Um componente de contagem regressiva personalizável para lojas VTEX, com cálculo dinâmico da contagem.

## Introdução

Este projeto fornece um componente de contagem regressiva customizável, desenvolvido para exibir dois ciclos temporais: a contagem até o início de uma campanha e, posteriormente, a contagem até a sua finalização. O componente realiza o cálculo automático do ciclo com base na data atual, permitindo que as contagens sejam exibidas em sequência, adaptando-se automaticamente ao progresso da campanha.

## Instalação

Para instalar o componente, clone este repositório e linke-o ao seu workspace da VTEX. Em seguida, adicione-o ao arquivo manifest.json da sua store-theme:
```json
"{vendor}.unicode-countdown": "0.x"
```

## Uso
Para renderizar o componente em sua página, adicione-o ao arquivo JSON:
```json
{
  "store.home": {
    "blocks": [
      "Countdown"
    ]
  }
}

```

## Configuração
Acesse o editor do site em /admin/cms/site-editor, selecione o contador no menu lateral e altere as informações da campanha para ativar o componente.

## Publicação e Instalação
Para publicar o componente:

```bash
vtex publish
```
Em seguida, faça o deploy com:
```bash
vtex deploy {vendor}.unicode-countdown@{version}
```

## Propriedades

| Propriedade       | Tipo     | Descrição                                                     | Valor Padrão               |
|-------------------|----------|----------------------------------------------------------------|-----------------------------|
| `targetDate`      | `string` | Data de destino para contagem regressiva no formato ISO 8601 (ex.: "2024-12-31T23:59:59").                     | `''`                        |
| `displayFormat`   | `string` | Formato de exibição da contagem. Exemplo: `"DD dias HH:mm:ss"`, onde `DD` é o número de dias, `HH` as horas, `mm` os minutos e `ss` os segundos. | `"HH:mm:ss"`                |

## Personalização

Para personalizar o estilo, adicione classes CSS ao arquivo `styles.css`. O estilo pode ser ajustado para corresponder ao design da sua loja, como cores, espaçamento e tipografia.

## Licença

Este projeto é distribuído sob a licença MIT.
