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
    arrowColor: "white",
    width: "100%",
    height: "100vh",
    slides: [
      {
        id: 1,
        image: "/people.jpg",
        copy: "Headline 1",
      },
      {
        id: 2,
        image: "/x1.jpg",
        copy: "Headline 2",
      },
      {
        id: 3,
        image: "/x2.jpg",
        copy: "Headline 3",
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
