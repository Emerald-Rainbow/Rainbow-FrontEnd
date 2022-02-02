import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardActions from '@mui/material/CardActions';

import IconButton from '@mui/material/IconButton';
import Skeleton from '@mui/material/Skeleton';
import {useRouter} from 'next/router';

import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


export default function HomeCard(props) {
    const router = useRouter();
    const [image, setImage] = React.useState(0);

    function extractImage(string) {
        const imgRex = /<img.*?src="(.*?)"[^>]*>/g;
        const images = [];
          let img;
          while ((img = imgRex.exec(string))) {
             images.push(img[1]);
          }
          console.log(images);
        return images[0]?images[0]:0;
      }
      
    
      function htmlToLength(html, length) {
        const trimmedNode = htmlToNodeWithLength(html, length);
      
        const container = document.createElement("div");
        container.appendChild(trimmedNode);
        return container.innerHTML;
      }
      
      function htmlToNodeWithLength(html, length) {
        // Only for measurement. Never added to DOM.
        const container = document.createElement("div");
        container.innerHTML = html;
      
        const fullRange = document.createRange();
        fullRange.setStart(container, 0);
        fullRange.setEnd(container, 1);
      
        const range = findRangeWithLength(fullRange, length);
        return range.cloneContents();
      }
      
      function findRangeWithLength(range, length) {
        if (rangeLength(range) < length) return range;
      
        // Find the childNode with at least length content.
        for (const childNode of range.endContainer.childNodes) {
          range.setEnd(childNode, lastEndOffset(childNode));
          if (rangeLength(range) >= length) {
            return findRangeWithLength(range, length);
          }
        }
      
        // There are no child nodes long enough. It's a text node.
        const diff = length - rangeLength(range) + range.endOffset;
        range.setEnd(range.endContainer, diff);
        return range;
      }
      
      function lastEndOffset(node) {
        return node.childNodes.length || node.textContent.length;
      }
      
      function rangeLength(range) {
        return range.toString().length;
      }

     React.useEffect(() => {
      setImage(extractImage(props.post.content));
    }, [props.post.content]);
  return (
      <>
      {props.loading ? (
        <Card>
             <Skeleton animation="wave" height={140} />
        </Card>
      ):

    (<Card >
        
      <CardActionArea
       onClick={()=>{
           
        router.push(`/posts/${props.post.blogId}`);
    }}>
        {image?<CardMedia
          component="img"
          height="140"
          image={extractImage(props.post.content)}
          alt="green iguana"
        />:null}
        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
            {props.post.title}
          </Typography>
          <div style={{overflow: "hidden", textOverflow: "ellipsis", maxHeight: "150px"}}> 
          <Typography nowrap variant="body2" color="text.secondary"  gutterBottom =  {true}>
          <div dangerouslySetInnerHTML={{__html: props.post.content.replace(/<img[^>]*>/g,"")}} />
          </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
       
       
      </CardActions> 
      
    </Card>)}
    </>
  );
}