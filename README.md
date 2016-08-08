# Scroll-Buttom (jQuery Plugin)

Esse plugin adiciona um botão *Voltar para o início* em elementos com *overflow*.

## Modo de usar

```html
<!-- Plugin style. -->
<link rel="stylesheet" href="jquery-scrollButton.css">

<!-- jQuery library. -->
<script src="jquery-2.2.4.js"></script>

<!-- Plugin script. -->
<script src="jquery-scrollButton.js"></script>

<!-- Plugin setup. -->
<script>
    $('.container').scrollButton({
        size: 32,
        caption: 'Voltar para o início.'
    });
</script>
```

## Valores padrões

```javascript
$.fn.scrollButton.defaults = {
    size: 32,
    caption: 'Voltar para o início.'
};
```

## Demonstração

Acesse esse [link](http://olegon.github.io/jquery-scrollbutton).
