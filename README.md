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
    .exactly(2, span, {
        background: green;
    });
};


span {
    .at-most(3, span, {
        color: red;
    });
};

span {
    .at-least(3, span, {
        background: cyan;
    });
};

span {
    .between(4, 5, span, {
        color: purple;
    });
};
```

With HTML something like this:

```html
<div>
    <span>1</span>
</div>

<div>
    <span>1</span><span>2</span>
</div>

<div>
    <span>1</span><span>2</span><span>3</span>
</div>

<div>
    <span>1</span><span>2</span><span>3</span><span>4</span>
</div>

<div>
    <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
</div>

<div>
    <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span>
</div>
```
