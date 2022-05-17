# @uiworkspace/heros

A library of pre-built website hero components you can place on any react site.

## Installation

```bash
npm i @uiworkspace/sliders
```

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
        id: 1,
        image: "/photo1.jpg", //root url of photo
      },
      {
        id: 2,
        image: "/photo2.jpg",
      },
      {
        id: 3,
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
