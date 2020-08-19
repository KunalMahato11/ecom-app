import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component{
    constructor() {
        super();

        this.state = {
            sections: [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/wp9F35h/Hat-Homepage.png',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'hoodies',
                  imageUrl: 'https://i.ibb.co/tm2KSdP/Hoddies-Homepage.png',
                  id: 2,
                  linkUrl: 'shop/Hoodies'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/d49j7st/sneaker-homepage.jpg',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ],
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({title, imageUrl, id, size}) => (
                        <MenuItem key={id} title={title} imageUrl ={imageUrl} size={size}/>
                    ))
                } 
            </div>
        )
    }
}

export default Directory;