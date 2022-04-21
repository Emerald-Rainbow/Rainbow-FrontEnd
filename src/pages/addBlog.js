import {useRef, useState, useContext} from "react";
import UserContext from '@context/user/UserContext';
import axios from 'axios';
import { db, auth } from "../../utils/firebase";
import { collection, addDoc, query, where , getDocs } from "firebase/firestore"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Editor from "../components/Editor";
import Styles from '../components/addBlog.module.css';
import Spinner from 'react-bootstrap/Spinner';
import { useRouter } from 'next/router';
import ProtectedRoute from '@components/ProtectedRoute/ProtectedRoute';
import Navbar from '../components/home/Navbar'
import Footer from "@components/Footer";
function BlogTitle(props){
  return(
    <input
      ref = {props.titleRef}
      id="blogTitle"
      className={Styles.titleInput}
      placeholder="Enter a Title.."
    ></input>
  )
}

export default function addBlog() {
  // const [editorHTML, setEditorHTML] =  useState("");
  const {user, userLoading, userError, logout} = useContext(UserContext);
  const [spinnerHidden, setSpinnerHidden] =  useState(true);
  const editorRef = useRef(null);
  const titleRef = useRef(null);
  const router = useRouter();


  // function handleTitleChange(e){
  //   setBlogTitle(e.target.value);
  //   console.log(e.target);
  //   e.target.focus();
  // }

  async function handlePost(){
    // Disable Post button on front end

    // Show loading Icon
    setSpinnerHidden(false);

    const d = new Date();
    // *****************************************************
    // Change User Id When Auth is setup
    let userId = user.uid;
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let createdAt = `${d.getHours()}:${d.getMinutes()}  ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
    let editor = editorRef.current.getEditor();
    let unprivEditor = editorRef.current.makeUnprivilegedEditor(editor);
    let editorHTML = unprivEditor.getHTML();
    let title = titleRef.current.value;
    let data = {
      userId    : userId,
      title     : title,
      content   : editorHTML,
      createdAt : createdAt,
      likes    : 0,
      author : user.displayName,
      authorPic : user.photoURL
    };
    // .editor.getContents().ops

    console.log(JSON.stringify(data));
    console.log();

    const res = await axios.post('/api/blog', JSON.stringify(data), {
        headers: {
        // Overwrite Axios's automatically set Content-Type
        'Content-Type': 'application/json'
      }
    });
    console.log(res);
    const docId = res.data;
    if(res.status == 200)
    {
      console.log("Success!");
      router.push(`/posts/${docId}`);
    }
    else
    {
      console.log("Failed!");
    }

    // Shpw alert Success or something
    // Redirect to Blog Page or something
  }
  return (
    <>
      <ProtectedRoute>
        <Navbar/>
      <div
        className={Styles.backDrop}
        style={{
          overflow: "auto",
          backgroundColor: "#EDEDED",
          borderRadius: "28px",
          width: "90%",
          height: "80vh",
          margin: "auto",
          marginTop:'-25px',
          // display: "flex",
          flexDirection: "column",
          transform: 'translateY(13%)',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <style jsx global>{`
          body {
            background-color: #1f77a9;
          }
        `}</style>
        <div 
          className={Styles.editorWrapper}
          style={{
            width:'80%',
            height:'80%',
            margin:'auto',
            marginTop:'20px',
          }}
        >
          <div
            style={{
              display:'flex',
              height: '40px',
            }}
          >
            <BlogTitle titleRef={titleRef} />
            <button
              className={Styles.postButton}
              onClick={handlePost}
              disabled={spinnerHidden?false:true}
            >
              <span style={{ 
                paddingRight: "3px",
                fontSize:'16px',
                verticalAlign: 'middle',
                }}>Post</span>
              <Spinner 
                  animation="border" 
                  role="status" 
                  variant="info" 
                  size="sm" 
                  hidden={spinnerHidden}>
                <span className="visually-hidden">Loading...</span>
              </Spinner>
              <svg
                id = "postIcon"
                hidden={spinnerHidden?false:true}
                width="18"
                height="18"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ verticalAlign: "middle" }}
              >
                <path
                  className={Styles.postIcon}
                  d="M1.89499 1.38601L12.43 6.42501C12.5363 6.47592 12.6261 6.55586 12.689 6.65561C12.7518 6.75537 12.7852 6.87086 12.7852 6.98876C12.7852 7.10667 12.7518 7.22216 12.689 7.32192C12.6261 7.42167 12.5363 7.50161 12.43 7.55251L1.89499 12.5915C1.78695 12.6433 1.6663 12.6629 1.54741 12.6481C1.42852 12.6333 1.3164 12.5845 1.22441 12.5078C1.13242 12.431 1.06443 12.3294 1.02854 12.2151C0.992655 12.1008 0.990382 11.9786 1.02199 11.863L2.07599 7.99901C2.0889 7.95166 2.11545 7.90915 2.15235 7.87678C2.18925 7.84442 2.23486 7.82363 2.28349 7.81701L7.38849 7.12351C7.40978 7.12053 7.42993 7.1121 7.44701 7.09905C7.46409 7.086 7.47752 7.06877 7.48599 7.04901L7.49499 7.01751C7.49894 6.9896 7.49333 6.96117 7.47908 6.93684C7.46483 6.91252 7.44277 6.89373 7.41649 6.88351L7.38899 6.87601L2.28899 6.18301C2.24045 6.17631 2.19495 6.15548 2.15815 6.12312C2.12134 6.09076 2.09486 6.0483 2.08199 6.00101L1.02199 2.11451C0.990382 1.99895 0.992655 1.87673 1.02854 1.76241C1.06443 1.6481 1.13242 1.54651 1.22441 1.46975C1.3164 1.39298 1.42852 1.34428 1.54741 1.32943C1.6663 1.31459 1.78695 1.33423 1.89499 1.38601Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
          {/* <Editor placeholder="Add blog content!" editorHTML={editorHTML} setEditorHTML={setEditorHTML} editorRef={editorRef} /> */}
          <Editor placeholder="Add blog content!" editorRef={editorRef} />
        </div>
      </div>

      <svg
        width="40vh"
        height="40vh"
        viewBox="0 0 588 570"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          bottom: "0",
          right: "0",
          zIndex: "-1"
        }}
      >
        <path
          transform="translate(0,10)"
          d="M405.688 70C509.188 19 458.5 45.5 588.188 0V569.5H0C0 530.833 4.8961 478.274 66.6878 442.5C104.688 420.5 276.167 422.167 319 394.5C388.833 372.333 309.188 149.5 405.688 70Z"
          fill="#51CA26"
        />
      </svg>

      </ProtectedRoute>
      
    </>
  );
}
