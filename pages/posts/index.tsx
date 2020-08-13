import fetch from "isomorphic-unfetch";
import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";
import { Layout } from "../../components/Layout";
import { useState } from "react";
import { ThreeHorseLoading } from "react-loadingg";

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const allPosts = async () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const waitPosts = await fetch(`https://typeanything.herokuapp.com/api/posts`);
  const posts = await waitPosts.json();
  if (posts) {
    setLoading(false);
  } else if (loading) {
    return <ThreeHorseLoading />;
  } else {
    return (
      <Layout>
        {posts.map((post) => {
          return (
            <Card key={post._id} className={classes.card} elevation={3}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="body2">{post.content}</Typography>
              </CardContent>
            </Card>
          );
        })}
      </Layout>
    );
  }
};

// export async function getServerSideProps() {
//   const response = await fetch(`https://typeanything.herokuapp.com/api/posts`);
//   const posts = await response.json();

//   return { props: { posts: posts } };
// }

export default allPosts;
