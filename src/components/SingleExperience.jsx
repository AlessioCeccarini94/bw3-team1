import { useDispatch } from "react-redux"
import { deleteExperienceAction } from "../redux/actions/actions"
import { FaRegTrashAlt } from "react-icons/fa";

const SingleExperience = ({ experienceData, userId }) => {
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
      <FaRegTrashAlt
      onClick={() =>
          dispatch(deleteExperienceAction(userId, experienceData._id))}
              style={{ cursor: "pointer" }}
              className="ms-auto"
              size={20}
      />
    </div>
  )
}

export default SingleExperience
