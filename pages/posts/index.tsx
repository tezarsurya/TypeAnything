import fetch from "isomorphic-unfetch";
import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";
import { Layout } from "../../components/Layout";

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const allPosts = (props) => {
  const classes = useStyles();
  return (
    <Layout>
      {props.posts.map((post) => {
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
};

export async function getServerSideProps() {
  const response = await fetch(`http://localhost:3000/api/posts`);
  const posts = await response.json();

  return { props: { posts: posts } };
}

export default allPosts;
