# Scroll-Buttom (jQuery Plugin)

Esse plugin adiciona um botão *Voltar para o início* em elementos com *overflow*.

## Modo de usar

```html
<script src="jquery-2.2.4.js"></script>
<script src="jquery-scrollButton.js"></script>
<script>
    $('.container').scrollButton({
        size: 32,
        caption: 'Voltar para o início.'
    });
</script>
```

## Defaults

```javascript
$.fn.scrollButton.defaults = {
    size: 32,
    caption: 'Voltar para o início.'
};
```

## Preview

Acesse esse [link](http://olegon.github.io/jquery-scrollButton).
