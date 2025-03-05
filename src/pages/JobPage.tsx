import { Icon } from "@iconify/react";
import {
  Button, Divider, Fade, MenuItem,
  Select, SelectChangeEvent, Step, StepLabel,
  Stepper, TextField, Typography, Backdrop
} from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { ChangeEvent, useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchJob } from "../app/jobSlice";
import constants from "../constants";
import colors from "../styles/colors";
import styles from "./JobPage.module.css";

function JobPage() {
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()
  const [updateServiceType, setUpdateServiceType] = useState<boolean>(false)
  const mobileBreakpoint = useAppSelector((state) => state.ui.mobileBreakpoint)
  const statusSteps = constants.statusSteps
  const job = useAppSelector((state) => state.job.job.data)
  const doNumber = job && job.do_number
  const jobPhoneNumber = job && job.phone_number
  const detrackStatus = job && job.status
  const trackingStatus = job && job.tracking_status
  const jobServiceType = job && job.type
  const mileStones = job && job.milestones
  const lastMilestone = mileStones && mileStones[mileStones.length - 1]
  const updatedAt = job && job.updated_at
  const isSelfCollection = job && job.assign_to === 'SELF COLLECT'
  const text = searchParams.get("do_number")
  const [serviceType, setServiceType] = useState<string>("delivery")
  const [deliveryRemarks, setDeliveryRemarks] = useState<string>("")
  const [phoneNumber, setPhoneNumber] = useState<string>("")

  useEffect(() => {
    if (job === null) {
      if (text !== null)
        dispatch(fetchJob(text))
          .unwrap()
          .then((r) => {
            if ("message" in r) enqueueSnackbar(r.message)
          })
    }
  }, [job])

  const customIcon = (icon: string, index: number, milestonesLength: number | null) => {
    let isActive = false
    if (milestonesLength !== null) isActive = milestonesLength === 0 ? index <= 1 : index < milestonesLength
    if (index === 2 && isSelfCollection) icon = "raphael:package"
    return (
      <div className={styles.customIcon} style={{
        backgroundColor: '#3f3f3f'
      }} >
        <Icon icon={icon} fontSize={mobileBreakpoint ? 30 : 35} color={isActive ? colors.webGreen : colors.webWhite} />
      </div>
    )
  }

  const formatDate = (date: string) => {
    if (date === undefined) return ""

    const dateObj = new Date(date)
    return dateObj.toLocaleString('en-SG', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    })
  }

  const handleServiceTypeButton = () => {
    setUpdateServiceType(true)
  }

  const handleServiceType = (event: SelectChangeEvent) => {
    setServiceType(event.target.value)
  }

  const handleDeliveryRemarks = (event: SelectChangeEvent) => {
    setDeliveryRemarks(event.target.value)
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '')
    setPhoneNumber(value)
  }

  const handleResetFields = () => {
    setUpdateServiceType(false)
    setDeliveryRemarks("")
    setPhoneNumber("")
  }

  const handleUpdate = () => {
    if (phoneNumber === jobPhoneNumber) {
      setUpdateServiceType(false)
      enqueueSnackbar('Updated Successfully.', { variant: 'success' })
    }
    else enqueueSnackbar('Authentication failed. Please try again.')
  }

  const stepperStyles = {
    stepLabel: {
      '.Mui-active': {
        color: `${colors.webWhite} !important`
      },
      '.MuiStepLabel-labelContainer': {
        color: colors.webWhite,
      }
    },
    stepConnector: {
      '.MuiStepConnector-root': {
        top: '25px',
        left: 'calc(-50% + 25px)',
        right: 'calc(50% + 25px)',
      },
      '.MuiStepConnector-line': {
        borderTopWidth: '2px'
      }
    },
    verticalStepConnector: {
      '.MuiStepConnector-line': {
        marginLeft: '10px'
      }
    },
    verticalStepLabel: {
      '.MuiStepLabel-labelContainer': {
        color: colors.webWhite,
        marginLeft: '10px'
      },
      '.Mui-active': {
        color: `${colors.webWhite} !important`
      }
    }
  }

  const getStepLabel = (step: { [key: string]: string }, i: number) => (
    <StepLabel
      sx={mobileBreakpoint ? stepperStyles.verticalStepLabel : stepperStyles.stepLabel}
      slots={{
        stepIcon: () => customIcon(step.icon, i, mileStones?.length ?? null)
      }}
    >
      <div>{i === 2 && isSelfCollection ? 'Ready for Collection' : step.label}</div>
      <div>{mileStones && formatDate(mileStones[i]?.pod_at)}</div>
    </StepLabel>
  )

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles["box-container"]} style={{
          padding: mobileBreakpoint ? '1rem' : '2rem',
          width: mobileBreakpoint ? '100%' : ''
        }}>
          <div className={styles.header} style={{
            alignItems: mobileBreakpoint ? 'start' : 'center'
          }}>
            <div style={{ flex: 1 }}>
              <div className={styles['status-container']}>
                <Typography variant="h3">Status</Typography>
                <div className={styles.status}>{isSelfCollection && trackingStatus !== 'Completed' ? 'Ready for Collection' : trackingStatus ?? 'Not available'}</div>
              </div>
              <div style={{ display: 'flex', gap: mobileBreakpoint ? 0 : '1rem', flexDirection: mobileBreakpoint ? 'column' : 'row' }}>
                <Typography variant="body1">AWB: {doNumber ?? 'Not available'}</Typography>
                <Typography variant="body1">Service Type: {isSelfCollection ? 'Self Collection' : jobServiceType ?? 'Not available'}</Typography>
                <Typography variant="body1">Last Updated: {(updatedAt && formatDate(updatedAt)) ?? 'Not available'}</Typography>
              </div>
            </div>

          </div>
          <Divider sx={{
            margin: '1rem 0',
            borderColor: '#8e8e8e'
          }} />
          <div className={styles['stepper-container']}>
            <Stepper
              alternativeLabel={!mobileBreakpoint}
              orientation={mobileBreakpoint ? 'vertical' : 'horizontal'}
              sx={mobileBreakpoint ? stepperStyles.verticalStepConnector : stepperStyles.stepConnector}
            >
              {statusSteps.map((step, i) => (
                <Step
                  key={step.label}
                  sx={{
                    '.MuiStepConnector-line': {
                      borderColor:
                        mileStones?.length === 0
                          ? i <= 1
                            ? colors.webGreen
                            : colors.webWhite
                          : i < (mileStones?.length ?? 0)
                            ? colors.webGreen
                            : colors.webWhite
                    }
                  }}
                >
                  {getStepLabel(step, i)}
                </Step>
              ))}
            </Stepper>
            {lastMilestone?.reason && (
              <div style={{ textAlign: 'center' }}>Remarks: {lastMilestone.reason}</div>
            )}
          </div>
        </div>
        {(detrackStatus && ["at_warehouse", "dispatched"].includes(detrackStatus)) && !updateServiceType && (
          <Button
            variant="outlined"
            onClick={handleServiceTypeButton}
            sx={{
              borderRadius: '25px',
              borderColor: colors.webWhite,
              color: colors.webWhite
            }}
          >
            Update Delivery
          </Button>
        )}

        {updateServiceType && (
          <Fade in={updateServiceType} timeout={800}>
            <div className={styles['box-container']} style={{
              padding: mobileBreakpoint ? '1rem' : '2rem',
              width: mobileBreakpoint ? '100%' : ''
            }}>
              <Typography variant="h3">Update Delivery</Typography>
              <Divider sx={{
                margin: '1rem 0',
                borderColor: '#8e8e8e'
              }} />
              <div className={styles["select-container"]} style={{
                flexDirection: mobileBreakpoint ? 'column' : 'row'
              }}>
                <div className={styles.inputs} style={{
                  flexDirection: mobileBreakpoint ? 'column' : 'row'
                }}>
                  <Select
                    size="small"
                    value={serviceType}
                    onChange={handleServiceType}
                    sx={{
                      color: colors.webWhite,
                      ".MuiOutlinedInput-notchedOutline": {
                        borderColor: colors.webWhite
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: colors.webGreen
                      }
                    }}
                  >
                    <MenuItem value="delivery">Delivery</MenuItem>
                    <MenuItem value="self_pickup">Self collection</MenuItem>
                  </Select>
                  {serviceType === "delivery" && (
                    <Select
                      displayEmpty
                      size="small"
                      value={deliveryRemarks}
                      onChange={handleDeliveryRemarks}
                      renderValue={() => {
                        if (deliveryRemarks === "") return "Remarks"
                        else return deliveryRemarks
                      }}
                      sx={{
                        color: colors.webWhite,
                        ".MuiOutlinedInput-notchedOutline": {
                          borderColor: colors.webWhite,
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: colors.webGreen,
                        },
                      }}
                    >
                      {constants.deliveryRemarksList.map((type: string, i: number) => (
                        <MenuItem key={i} value={type}>{type}</MenuItem>
                      ))}
                    </Select>
                  )}
                  <TextField
                    fullWidth
                    size="medium"
                    value={phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Enter registered mobile number for authentication"
                    sx={{
                      '.MuiOutlinedInput-root': {
                        color: '#ffffff',
                        border: '1px solid',
                        borderColor: colors.webWhite,
                        borderRadius: '5px'
                      },
                    }}
                    slotProps={{
                      htmlInput: {
                        pattern: '[0-9]*',
                        inputMode: 'numeric',
                        type: 'tel',
                      }
                    }}
                  ></TextField>
                </div>
                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  flexDirection: mobileBreakpoint ? 'row-reverse' : 'row',
                  justifyContent: 'center'
                }}>
                  <Button variant="outlined"
                    fullWidth={mobileBreakpoint}
                    size="small"
                    onClick={handleUpdate}
                    sx={{
                      color: colors.webWhite,
                      borderColor: colors.webGreen,
                      padding: '1rem 2rem'
                    }}>Update
                  </Button>
                  <Button variant="outlined"
                    fullWidth={mobileBreakpoint}
                    size="small"
                    onClick={handleResetFields}
                    sx={{
                      color: colors.webWhite,
                      borderColor: 'red',
                      padding: '1rem 2rem'
                    }}>Cancel
                  </Button>
                </div>
              </div>
            </div>
          </Fade>
        )}
      </div>
      <Backdrop open={job === null}>
        <Icon icon="eos-icons:loading" fontSize={60} />
      </Backdrop>
    </div>
  )
}

export default JobPage