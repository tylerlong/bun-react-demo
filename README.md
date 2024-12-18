# packle react demo

This is a demo to bundle a react app using [packle](https://www.npmjs.com/package/packle).

## Instructions

### bundle

```
bun packle
```

### bundle and watch

```
bun packle -w
```

### Start a HTTP Server

```
bun serve public
```

### Check the website

http://localhost:3000

## Notes

In your \*.scss files, if you want to include an external css file:

```scss
@use "../node_modules/antd/dist/reset";
```
