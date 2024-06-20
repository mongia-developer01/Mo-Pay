import { useEffect, useState } from 'react';
import { Box, CircularProgress, Container, Grid, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useParams } from 'react-router-dom';

const theme = createTheme();

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);
  
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ mt: 3, mb: 3 }}>
        <Container maxWidth="md">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
            {product && (
            <img src={product.image} alt={product.title} style={{ width: '100%', height: 'auto' }} />
            )}
            </Grid>
            <Grid item xs={12} md={6}>
             {product && (
              <>
              <Typography variant="h4" component="h1" gutterBottom>
              {product.title}
              </Typography>
              <Typography variant="h6" gutterBottom>
              ${product.price}
              </Typography>
            <Typography variant="body1" gutterBottom>
             {product.description}
              </Typography>
            </>
            )}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default ProductDetails;
