import { useDispatch } from "react-redux"
import { Button } from "react-bootstrap"
import { deleteExperienceAction } from "../redux/actions/actions"

const SingleExperience = ({ experienceData, itemIndex }) => {
  const dispatch = useDispatch()

  if (!experienceData || experienceData.role === undefined) return null
  return (
    <div className="d-flex">
      <div className="me-3">
        <div
          style={{
            width: "48px",
            height: "48px",
            backgroundColor: "#e9ecef",
            borderRadius: "4px",
          }}
        ></div>
      </div>

      <div>
        <h6 className="mb-0 fw-semibold">{experienceData.role}</h6>
        <p className="mb-1">{experienceData.company}</p>
        <p className="mb-1 text-muted">
          {" "}
          From {experienceData.startDate} To {experienceData.endDate}
        </p>
        <p className=" mb-0">{experienceData.description}</p>
      </div>
      <Button
        onClick={() =>
          dispatch(deleteExperienceAction(experienceData._id, itemIndex))
        }
        className="ms-auto"
      >
        Delete
      </Button>
    </div>
  )
}

export default SingleExperience
