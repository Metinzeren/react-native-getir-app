import React, { useState, useRef, useEffect } from 'react';
import { View, Image, FlatList, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Carousel = () => {
  const [banners, setBanners] = useState([
    'https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1629378026496.jpeg',
    'https://cdn.getir.com/misc/621784419e62143ed76eef01_banner_tr_1645969386292.jpeg',
    'https://cdn.getir.com/promos/6221aef965805c5b1e703845_banner_tr_1646723453154.jpeg',
    'https://cdn.getir.com/misc/622a6d18b2e2fe3a8e809894_banner_tr_1646947639211.jpeg',
  ]);
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  const onViewRef = useRef((viewableItems) => {
    if (viewableItems.viewableItems.length > 0) {
      setActiveIndex(viewableItems.viewableItems[0].index || 0);
    }
  });


  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (activeIndex + 1) % banners.length;
      flatListRef.current.scrollToIndex({ index: newIndex, animated: true });
    }, 2000);

    return () => clearInterval(interval);
  }, [activeIndex, banners.length]);

  return (
    <FlatList
      ref={flatListRef}
      data={banners}
      renderItem={(item) => (
        <Image
          source={{ uri: item.item }}
          style={{ width: width, height: height * 0.24, resizeMode: 'stretch' }}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={width}
      snapToAlignment={'center'}
      decelerationRate={'normal'}
      onViewableItemsChanged={onViewRef.current}
      testID="banner-carousel"
    />
  );
};

export default Carousel;
