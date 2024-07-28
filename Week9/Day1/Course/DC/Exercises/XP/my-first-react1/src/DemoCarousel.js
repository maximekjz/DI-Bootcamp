import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const DemoCarousel = () => {
    const onChange = () => {
        console.log('Slide changed');
    };

    const onClickItem = () => {
        console.log('Item clicked');
    };

    const onClickThumb = () => {
        console.log('Thumbnail clicked');
    };

    return (
        <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
            <div>
                <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp" alt="New York" />
                <p className="legend">New York</p>
            </div>
            <div>
                <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp" alt="Japan" />
                <p className="legend">Japan</p>
            </div>
            <div>
                <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp" alt="Macao" />
                <p className="legend">Macao</p>
            </div>
            <div>
                <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg" alt="Hong Kong" />
                <p className="legend">Hong Kong</p>
            </div>
        </Carousel>
    );
}

export default DemoCarousel;
