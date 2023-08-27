import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  };

  handleSubmit = value => {
    this.setState({
      query: value,
      images: [],
      page: 1,
    });
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.fetch();
    }
  }

  fetch = async () => {
    const { query, page } = this.state;

    try {
      const result = await ImageService.getImages(query, page);

      this.setState(prevState => {
        return {
          images: [...prevState.images, ...result.photos],
        };
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleButtonLoadMoreClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images } = this.state;

    return (
      <>
        <SearchForm onSubmit={this.handleSubmit} />
        {images.length < 1 && (
          <Text textAlign="center">Sorry. There are no images ... 😭</Text>
        )}
        <Grid>
          {images.map(({ id, avg_color, alt, src: { large } }) => (
            <GridItem key={id}>
              <CardItem color={avg_color}>
                <img src={large} alt={alt} />
              </CardItem>
            </GridItem>
          ))}
        </Grid>
        {images.length !== 0 && (
          <Button type="button" onClick={this.handleButtonLoadMoreClick}>
            Load more
          </Button>
        )}
      </>
    );
  }
}
