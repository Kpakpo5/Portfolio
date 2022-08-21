import { useState } from 'react';
import Modal from './Modal';
import {
  ProjectTemplate,
  ProjectName,
  ImageContainer,
  ProjectImage,
  ProjectInfosContainer,
  ProjectLink,
  ProjectMobileLinks,
  ProjectMobileLink,
  OpenModalButton
} from "./Projects.elements";


const Project = ({
  name,
  description,
  tools,
  image,
  linkName,
  source,
  repository,
  context,
  execution
}) => {

  const [modalIsOpen, setModalIsopen] = useState(false);

  const [display, setDisplay] = useState(false);

  const handleonMouseEnter = () => {
    setDisplay(true);
  };

  const handleonMouseLeave = () => {
    setDisplay(false);
  }


  const HideModal = () => {
    setModalIsopen(false);
    document.body.style.overflow = 'unset';
  }


  const showModal = () => { 
    setModalIsopen(true)

    if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'hidden';
    }
  }
  return (
    <ProjectTemplate>
      <ProjectName>{name}</ProjectName>
      <ImageContainer onMouseEnter={handleonMouseEnter} onMouseLeave={handleonMouseLeave}>
        <ProjectImage src={image}/>
          { display &&
            <ProjectInfosContainer>
              <OpenModalButton onClick={() => showModal()}>Infos</OpenModalButton>
              { linkName && <ProjectLink href={source} target="_blank">{linkName}</ProjectLink> }
            </ProjectInfosContainer>
          }
      </ImageContainer>
      <ProjectMobileLinks>
        <ProjectMobileLink onClick={() => showModal()}>Infos</ProjectMobileLink>
        { linkName && <ProjectMobileLink href={source} target="_blank">{linkName}</ProjectMobileLink> }
      </ProjectMobileLinks>
      <Modal
        modalIsOpen={modalIsOpen}
        closeModal={() => HideModal()}
        name={name}
        image={image}
        linkName={linkName}
        description={description}
        context={context}
        execution={execution}
        tools={tools}
        source={source}
        repository={repository}
      />
    </ProjectTemplate>
  );
  }
  


export default Project;
