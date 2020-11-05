import React, { useContext } from 'react';
// import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

import CollectionsContext from '../../context/contexts/collections/collections.context'

const CollectionPage = ({ match }) => {
  //use context by wrapping it around things like a component
  // return (
    // <CollectionsContext.Consumer>
    // {
    //   collections => {
    //     const collection = collections[match.params.collectionId]
    //     const { title, items } = collection
    //     return (
    //       <div className='collection-page'>
    //         <h2 className='title'>{title}</h2>
    //         <div className='items'>
    //           {items.map(item => (
    //             <CollectionItem key={item.id} item={item} />
    //           ))}
    //         </div>
    //       </div> 
    //     )
    //   }
    // }
    // </CollectionsContext.Consumer>

    //use context with the useContext hook
    const collections = useContext(CollectionsContext)
    const collection = collections[match.params.collectionId]
    const { title, items } = collection
    return (
            <div className='collection-page'>
              <h2 className='title'>{title}</h2>
              <div className='items'>
                {items.map(item => (
                  <CollectionItem key={item.id} item={item} />
                ))}
              </div>
            </div>       
  );
};

// const mapStateToProps = (state, ownProps) => ({
//   collection: selectCollection(ownProps.match.params.collectionId)(state)
// });

export default CollectionPage
