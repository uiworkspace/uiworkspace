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

  const sliderContent = {
    offsetPercentage: 4,
    showOffsetOverlay: true,
    transitionSpeed: 0.45,
    mobileslidesPerScreen: 2,
    desktopslidesPerScreen: 3,
    images: [
      {
        imglink: "/images/photo.jpg", //path to image
      },
      {
        imglink: "/images/photo.jpg",
      },
      {
        imglink: "/images/photo.jpg",
      },
      {
        imglink: "/images/photo.jpg",
      },
      {
        imglink: "/images/photo.jpg",
      },
      {
        imglink: "/images/photo.jpg",
      },
    ],
  };

   return <Flixslider content={sliderContent} />
}
```

## Fadeslider usage

```python
import { Fadeslider } from '@uiworkspace/sliders'

export default function Yourcomponent() {

  const sliderContent = {
    arrowColor: "white", //optional
    customRightArrow: "", //optional
    customLeftArrow: "", //optional
    width: "100%", //optional
    height: "100vh", //optional
    slides: [
      {
        image: "/images/photo.jpg", //path to image
      },
      {
        image: "/images/photo.jpg",
      },
      {
        image: "/images/photo.jpg",
      },
    ],
  };

   return <Fadeslider content={sliderContent}></Fadeslider>
}
```

## Parallax slider usage

```python
import { Parallaxslider } from '@uiworkspace/sliders'

export default function Yourcomponent() {

  const sliderContent = {
    arrowColor: "white", //optional
    customRightArrow: "", //optional
    customLeftArrow: "", //optional
    width: "100%", //optional
    height: "80vh", //optional
    slides: [ //required
      {
        image: "/images/x.jpg",
      },
      {
        image: "/images/x1.jpg",
      },
      {
        image: "/images/x2.jpg",
      },
    ],
  };

   return <Parallaxslider content={sliderContent} />
}
```

## Contact

Email: [hello@uiworkspace.com](mailto:hello@uiworkspace.com)

## License

Non-exclusive license from [uiworkspace.com](https://uiworkspace.com)
