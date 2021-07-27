import {Modal} from '@material-ui/core';
import classes from "./SuccessModal.module.scss"

export const SuccessModal = ({open, handleClose})=>{
    const modalBody = (
        <div className={classes.modalBody}>
            <h3 className={classes.modalHeader} >post updated successfully!</h3>
        </div>
    )

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >
                {modalBody}
        </Modal>)
}