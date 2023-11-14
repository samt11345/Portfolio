import React from 'react';
import dealDiveImg from '../assets/dealDive.png';
import filmSearchImg from '../assets/film-search.png';
import ProjectItem from './ProjectItem';
import ssssdoku from '../assets/ssssdoku.png';

function Projects() {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
            <p className='text-center py-8'></p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <a href="https://deal-dive-dcc6c738ad30.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <ProjectItem img={dealDiveImg} title="Deal Dive" />
                </a>
                <a href="https://saikoub.github.io/FilmSearch/" target="_blank" rel="noopener noreferrer">
                    <ProjectItem img={filmSearchImg} title="Film Search" />
                </a>
                <a href="https://dry-sands-01310-b65cef519a9a.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <ProjectItem img={ssssdoku} title="SSSSdoku" />
                </a>
            </div>
        </div>
    );
}

export default Projects;
