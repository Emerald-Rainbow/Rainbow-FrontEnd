// alternate toolbar
const CustomToolbar2 = (props) => (
    <div
      ref={props.toolRef}
      id="toolbar"
      style={{
        display: "flex",
        minHeight: "37px",
        // margin: "50px auto 30px",
        width: "100%",
        backgroundColor: `${editorBackground}`,
        boxShadow: `${editorShadow}`,
        maxHeight: "45px",
        flexBasis: "5%",
        flexGrow: "1",
        alignItems: "center"
      }}
    >
      <select
          className={`ql-header ${styles.toolbarGroup}`}
          defaultValue={""}
          onChange={(e) => e.persist()}
      >
          <option value="1"></option>
          <option value="2"></option>
          <option selected></option>
      </select>
      <div 
          id="toolsContainer" 
          style={{width:'fit-content%', height:'fit-content'}}
        >
            {
                props.toolButtons.map && props.toolButtons.map(element => {
                    return (
                        <span 
                          className={`ql-formats ${styles.toolbarGroup}`}
                        >
                            {
                                element.map && element.map(btn => {
                                    
                                    if(typeof(btn) == 'string'){
                                        return(<button className={`ql-${btn}`}></button>)
                                    }
                                    else if(typeof(btn) == 'object'){
                                        return(<button className={`ql-${btn.cls}`} value={`${btn.val}`}></button>)
                                    }
                                    
                                })
                            }
                        </span>
                    )
                    //each element will be a span

                })
            }
      </div>
      <span className={styles.toolbarGroup}
        style={{ 
          display: "flex", 
          alignItems: "center", 
          width: "fit-content",
          position:'relative'
        }}
      >
        <input
          type="checkbox"
          id={styles.ellipsisCheckbox}
          className={styles.ellipsisCheckbox}
          checked={props.isChecked}
          onClick={props.handleCheck}
        />
        <label htmlFor={styles.ellipsisCheckbox} className={styles.icon}>
          <div
            style={{
              width: "20px",
              height: "20px",
              position: "absolute",
              top: "0",
              left: "0",
              transform: "translate(-39%,-40%)"
            }}
          ></div>
        </label>
        {/* dropdown */}
      <div style={{
          width:'62px',
          height:'0px',
          position:'absolute',
          top:'550%',
          left : '-10px',
          backgroundColor: `${editorBackground}`,
          boxShadow: 'rgb(0 0 0 / 25%) 0 4px 4px 0px',
          // opacity:`${props.isChecked?'100%':'0%'}`,
          height:`${props.isChecked?'75px':'0px'}`,
          transition: 'height 0.5s ease-out',
          overflow:'hidden',
          zIndex:'2'
      }}>
        {
          props.dropButtons.map && props.dropButtons.map(element => {
                      return(
                          <span 
                              className={`ql-formats ${styles.toolbarGroup}`}
                              style={{
                                minWidth:'fit-content',
                                display:'block',
                                margin:'auto'
                              }}
                          >
                              {
                                  element.map && (
                                      element.map(btn => {
                                          if(typeof(btn) == 'string'){
                                              return(<button className={`ql-${btn}`} type="button"></button>)
                                          }
                                          else if(typeof(btn) == 'object' && typeof(btn) != undefined){
                                              return(<button className={`ql-${btn.cls}`} value={`${btn.val}`}></button>)
                                          }
                                          
                                      })
                                  )
                              }
                          </span>
                      )
                      //each element will be a span

          })
        }
      </div>
      </span>
  
  
      <span className={`${styles.toolbarGroup}`} style={{ marginLeft: "auto", alignSelf: "center" }}>
        <span style={{ paddingRight: "3px" }}>Post</span>
  
        {/* send button */}
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ verticalAlign: "middle" }}
        >
          <path
            d="M1.89499 1.38601L12.43 6.42501C12.5363 6.47592 12.6261 6.55586 12.689 6.65561C12.7518 6.75537 12.7852 6.87086 12.7852 6.98876C12.7852 7.10667 12.7518 7.22216 12.689 7.32192C12.6261 7.42167 12.5363 7.50161 12.43 7.55251L1.89499 12.5915C1.78695 12.6433 1.6663 12.6629 1.54741 12.6481C1.42852 12.6333 1.3164 12.5845 1.22441 12.5078C1.13242 12.431 1.06443 12.3294 1.02854 12.2151C0.992655 12.1008 0.990382 11.9786 1.02199 11.863L2.07599 7.99901C2.0889 7.95166 2.11545 7.90915 2.15235 7.87678C2.18925 7.84442 2.23486 7.82363 2.28349 7.81701L7.38849 7.12351C7.40978 7.12053 7.42993 7.1121 7.44701 7.09905C7.46409 7.086 7.47752 7.06877 7.48599 7.04901L7.49499 7.01751C7.49894 6.9896 7.49333 6.96117 7.47908 6.93684C7.46483 6.91252 7.44277 6.89373 7.41649 6.88351L7.38899 6.87601L2.28899 6.18301C2.24045 6.17631 2.19495 6.15548 2.15815 6.12312C2.12134 6.09076 2.09486 6.0483 2.08199 6.00101L1.02199 2.11451C0.990382 1.99895 0.992655 1.87673 1.02854 1.76241C1.06443 1.6481 1.13242 1.54651 1.22441 1.46975C1.3164 1.39298 1.42852 1.34428 1.54741 1.32943C1.6663 1.31459 1.78695 1.33423 1.89499 1.38601Z"
            fill="black"
          />
        </svg>
      </span>
    </div>

  );
  const [toolButtons, setToolButtons] = useState(
    [
        ['bold','italic','underline','strike'],
        ['blockquote','link'],
        [{cls:'list', val:'ordered'}, {cls:'list', val:'bullet'}],
        ['image','video']
    ]
)
const [dropButtons, setDropButtons] = useState(
        [
          ['blockquote','link'],
          [{cls:'list', val:'ordered'}, {cls:'list', val:'bullet'}],
          ['image','video']
        ]
    );

         {/* <CustomToolbar2 toolButtons={toolButtons} dropButtons={dropButtons} toolRef={toolRef} isChecked={checked} handleCheck={handleCheck} /> */}
        {/* <div
          className="text-editor"
          style={{
            margin: "0 auto 35px",
            width: `${editorWidth}`,
            backgroundColor: `${editorBackground}`,
            boxShadow: `${editorShadow}`,
            flex: "1"
          }}
        > */}

        // if(isOverflownVertically(toolRef.current)) {


            function isOverflownVertically(element){
                if (element != null ){
                  return element.scrollHeight > element.clientHeight;
                }
                else {
                  return true;
                }
              }