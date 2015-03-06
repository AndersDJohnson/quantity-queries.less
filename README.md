# quantity-queries.less

Quantity queries mixins for LESS. Style items based on qunatity conditions.

Learn more about quantity queries in [this A List Apart article](http://alistapart.com/article/quantity-queries-for-css).

Inspired by [danielguillan/quantity-queries](https://github.com/danielguillan/quantity-queries) for SASS.

## Install

```sh
bower install --save quantity-queries.less
```

## Use

In your LESS, import the LESS file:

```less
@import "./path/to/quantity-queries/quantity-queries.less";
```

Then use the mixins, e.g.:

```less
span {
    .exactly(2, {
        background: green;
    });
};


span {
    .at-most(3, {
        color: red;
    });
};

span {
    .at-least(3, {
        background: cyan;
    });
};

span {
    .between(4, 5, {
        color: purple;
    });
};
```
