import React, {useCallback, useState, useRef, useEffect} from 'react';
import ElementResizeListener from './ElementResizeListener';
import styled from 'styled-components';

const Page = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
`;

const LeftPane = styled.div`
  background-color: #e0e0e0;
  height: 100%;
  flexShrink: 0;
  transition: width 150ms ease-out;
  width: ${props => props.isOpen ? '200px' : '0px'};
`;

const RightPane = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Hello: React.FC = () => {
  const [isOpen, setOpenState] = useState(true);
  const contentRef: React.RefObject<HTMLDivElement> = useRef(null);
  const textElmRef: React.RefObject<HTMLParagraphElement> = useRef(null);
  
  useEffect(() => {
    adaptResize();
  }, [])

  const adaptResize = useCallback(() => {
    if (contentRef.current && textElmRef.current) {
      const elmRect = contentRef.current.getBoundingClientRect();
      textElmRef.current.textContent = `width: ${elmRect.width}`;
    }
  }, []);

  return (
    <Page>
      <LeftPane isOpen={isOpen} />
      <RightPane ref={contentRef} >
        <ElementResizeListener onResize={adaptResize}/>
        <p ref={textElmRef} />
      </RightPane>
      <button
        style={{position: 'absolute'}}
        onClick={() => { setOpenState(!isOpen); }}
      >
        {isOpen ? 'Close' : 'Open'}
      </button>
    </Page>
  )
}

export default Hello;