import ReactDOM  from "react-dom";
import {useEffect} from 'react';
import { RiCloseCircleFill} from 'react-icons/ri';
import {
    ModalOverlay,
    ModalBody,
    ModalHeader,
    ModalMain,
    ProjectHeading,
    ProjectPicture,
    ProjectTitle,
    ProjectDetails,
    Context,
    Experience,
    LinksContainer,
    Link
} from "./ProjectModal.components";


const Modal = ({
    modalIsOpen,
    closeModal,
    name,
    image,
    description,
    context,
    execution,
    linkName,
    tools,
    source,
    repository

}) => {

    useEffect(() => {
        if(modalIsOpen) {
            window.onpopstate = () => closeModal();
        }
    });

    
    return ReactDOM.createPortal(
       (modalIsOpen && 
       <>
            <ModalOverlay />
            <ModalBody>
                <button onClick={closeModal}><span>Fermer</span><RiCloseCircleFill /></button>
                <ModalHeader>
                    <ProjectHeading>
                        <ProjectPicture src={image}/>
                        <ProjectTitle>
                            {name}
                        </ProjectTitle>
                        <p>{description}</p>
                        <small>{tools}</small>
                    </ProjectHeading>
                </ModalHeader>
                <ModalMain>
                    <ProjectDetails>
                        <Context>
                            <h4>Contexte</h4>
                            <p>{context}</p>
                        </Context>
                        <Experience>
                            <h4>Acquis</h4>
                            <p>{execution}</p>
                        </Experience>
                        <LinksContainer>
                            { (linkName && source) && <Link href={source} target="_blank">{linkName}</Link> }
                            <Link href={repository} target="_blank">Github</Link>
                        </LinksContainer>
                    </ProjectDetails>
                </ModalMain>
            </ModalBody>
        </>),
        document.getElementById("project-portal")
    );
}


export default Modal;