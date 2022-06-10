import React, { useState, useEffect } from 'react';
import NavBar2 from '../nav-bootstrap/NavBar2'
import Footer2 from '../Footer/Footer2'
import './Rules.css'
import PDF from './Assets/codeofconduct.pdf'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function Rules(props) {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }

    function nextPage(){
        if(pageNumber != numPages){
            setPageNumber(pageNumber + 1);
        }
    }
    function PrevPage(){
        if(pageNumber >1){
            setPageNumber(pageNumber - 1);
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div>
            <NavBar2 page="true"/>
            <div className="container main-rules mar-top-100">
                <div className="main-doc">
                    <Document
                        file= {PDF}
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        <Page pageNumber={pageNumber} />
                    </Document>
                    <p style={{textAlign: 'center'}}>Page {pageNumber} of {numPages}</p>
                </div>
                <div className="arrow-buttons">
                    <a><FaArrowAltCircleLeft onClick={PrevPage} /></a>
                    <a><FaArrowAltCircleRight onClick={nextPage} /></a>
                </div>
            </div>
            <Footer2 />
        </div>
    );
}

export default Rules;