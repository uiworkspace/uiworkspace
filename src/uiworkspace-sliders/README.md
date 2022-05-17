# @uiworkspace/heros

A library of pre-built website hero components you can place on any react site.

## Installation

```bash
npm i @uiworkspace/sliders
```

## Example usage of the Flixslider component

Your total images should be at least double your specified amount per screen.

```python
import { Flixslider } from '@uiworkspace/sliders'

export default function Yourcomponent() {

  const content = {
    offsetPercentage: 4,
    showOffsetOverlay: true,
    transitionSpeed: 0.45,
    mobileslidesPerScreen: 2,
    desktopslidesPerScreen: 3,
    images: [
      {
        imglink: "https://picsum.photos/500/500?grayscale",
      },
      {
        imglink: "https://picsum.photos/500/500?grayscale",
      },
      {
        imglink: "https://picsum.photos/500/500?grayscale",
      },
      {
        imglink: "https://picsum.photos/500/500?grayscale",
      },
      {
        imglink: "https://picsum.photos/500/500?grayscale",
      },
      {
        imglink: "https://picsum.photos/500/500?grayscale",
      },
    ],
  };

   return <Flixslider content={content} />
}
```

## Flixslider demo

- [Flixslider Demo](https://uiworkspace.com/component/flixslider)

## Example usage of the Fadeslider component

```python
import { Fadeslider } from '@uiworkspace/sliders'

export default function Yourcomponent() {

  const sliderContent = {
    arrowColor: "white", //optional css color
    width: "100%", //optional
    height: "100vh", //optional
    slides: [
      {
        image: "/photo1.jpg", //root url of photo
      },
      {
        image: "/photo2.jpg",
      },
      {
        image: "/photo3.jpg",
      },
    ],
  };

   return <Fadeslider content={sliderContent}></Fadeslider>
}
```

## Fadeslider demo

- [Fadeslider Demo](https://uiworkspace.com/component/fadeslider)

## Contact

For support contact us at hello@uiworkspace.com

## License

Non-exclusive license from https://www.uiworkspace.com
