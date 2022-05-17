# @uiworkspace/sliders

A library of pre-built slider components you can place on any react site.

## Demos

- [Flixslider Demo](https://uiworkspace.com/component/flixslider)

- [Fadeslider Demo](https://uiworkspace.com/component/fadeslider)

## Installation

```bash
npm i @uiworkspace/sliders
```

## Flixslider usage

Note: Your total images should be at least double your specified amount per screen.

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

## Fadeslider usage

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

## Contact

For support contact us at hello@uiworkspace.com

## License

Non-exclusive license from https://www.uiworkspace.com
