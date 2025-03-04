import { Icon } from "@iconify/react";
import { Button, Fade, InputAdornment, TextField, Typography } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../app/hooks";
import { fetchJob, fetchSheet, fetchSheetId } from "../app/jobSlice";
// import Faq from "../components/Faq";
import colors from "../styles/colors";
import styles from "./MainPage.module.css";

function MainPage() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  // const faqRef = useRef<HTMLDivElement | null>(null)
  const [searchText, setSearchText] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    dispatch(fetchSheetId()).unwrap().then((res: string) => {
      if (res) {
        dispatch(fetchSheet(res)).unwrap().then((r) => console.log(r))
      }
    })
  }, [])

  // const handleScrollToFaq = () => {
  //   faqRef.current?.scrollIntoView({ behavior: "smooth" });
  // }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }

  const handleSearch = () => {
    const searchParam = new URLSearchParams()
    setIsLoading(true)
    dispatch(fetchJob(searchText))
      .unwrap()
      .then((data: object) => {
        setIsLoading(false)
        if ('message' in data) enqueueSnackbar(`${data.message}`)
        if ("data" in data) {
          searchParam.append("do_number", searchText)
          navigate("search?" + searchParam.toString())
        }
      })
  }

  return (
    // <div className={styles.container}>
    //   <div className={styles.content}
    //     style={{ width: (mobileBreakpoint || tabletBreakpoint) ? '100%' : '50%' }}
    //   >
    //     <Typography variant="h1" sx={{ fontWeight: 'bold' }}>
    //       <div>WELCOME TO</div>
    //       <div style={{ marginTop: '1rem' }}>TRACKPARCEL</div>
    //     </Typography>
    //     <TextField
    //       value={searchText}
    //       onChange={handleInputChange}
    //       placeholder="Enter Air Way Bill Number 输入快递单号"
    //       slotProps={{
    //         input: {
    //           endAdornment:
    //             <InputAdornment position="end" sx={{
    //               color: colors.webWhite,
    //               display: searchText === "" ? 'none' : 'block'
    //             }}>
    //               <Fade in={searchText !== ""} timeout={500}>
    //                 {isLoading ?
    //                   <Icon icon="eos-icons:loading" fontSize={30} />
    //                   :
    //                   <Button
    //                     disabled={searchText === ""}
    //                     onClick={handleSearch}
    //                     sx={{ color: colors.webWhite }}>
    //                     Search
    //                   </Button>
    //                 }
    //               </Fade>
    //             </InputAdornment>
    //         }
    //       }}
    //       sx={{
    //         width: '80%',
    //         '.MuiOutlinedInput-root': {
    //           color: '#ffffff',
    //           border: '2px solid',
    //           borderColor: 'var(--webGreen)',
    //           borderRadius: '30px'
    //         },
    //         input: {
    //           "::placeholder": {
    //             textAlign: 'center'
    //           }
    //         }
    //       }}
    //     >
    //     </TextField>
    //     <Typography variant="h5" sx={{ fontStyle: 'italic' }}>
    //       <div style={{ marginBottom: '1rem' }}>Track and Trace your Parcel in just one click</div>
    //       <div style={{ fontWeight: 'bold' }}>查询快递状态就在一指间</div>
    //     </Typography>
    //     <Faq />
    //   </div>
    // </div>
    (
      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.content}>
            <Typography variant="h1" sx={{ fontWeight: "bold" }}>
              <div>WELCOME TO</div>
              <div style={{ marginTop: "1rem" }}>TRACKPARCEL</div>
            </Typography>
            <TextField
              value={searchText}
              onChange={handleInputChange}
              placeholder="Enter Air Way Bill Number 输入快递单号"
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      sx={{
                        color: colors.webWhite,
                        display: searchText === "" ? "none" : "block",
                      }}
                    >
                      <Fade in={searchText !== ""} timeout={500}>
                        {isLoading ? (
                          <Icon icon="eos-icons:loading" fontSize={30} />
                        ) : (
                          <Button
                            disabled={searchText === ""}
                            onClick={handleSearch}
                            sx={{ color: colors.webWhite }}
                          >
                            Search
                          </Button>
                        )}
                      </Fade>
                    </InputAdornment>
                  ),
                },
              }}
              sx={{
                width: "80%",
                ".MuiOutlinedInput-root": {
                  color: "#ffffff",
                  border: "2px solid",
                  borderColor: "var(--webGreen)",
                  borderRadius: "30px",
                },
                input: {
                  "::placeholder": {
                    textAlign: "center",
                  },
                },
              }}
            >
            </TextField>
            <Typography variant="h5" sx={{ fontStyle: "italic" }}>
              <div style={{ marginBottom: "1rem" }}>
                Track and Trace your Parcel in just one click
              </div>
              <div style={{ fontWeight: "bold" }}>查询快递状态就在一指间</div>
            </Typography>
          </div>
        </div>

        {/* <div id="faq" ref={faqRef} className={styles.section}>
          <Faq />
        </div> */}
      </div>
    )
  )
}

export default MainPage