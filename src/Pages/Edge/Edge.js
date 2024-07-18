import React, { useState, useRef, useEffect } from 'react';
import './Edge.css';
import MedImg from './components/MedImg';
import { TextField, Button } from '@material-ui/core';


// const datasets = [
//   {
//   imgSrc: "dataset1.png",
//   title: "Spine Dataset",
//   caption: "by SNU hospital",
//   category: ["CT", "Spine", "SNU"]
//   },
//   {
//   imgSrc: "dataset2.png",
//   title: "Brain Dataset",
//   caption: "by Yale Hospital",
//   category: ["CT", "Brain", "Yale"]
//   },
//   {
//   imgSrc: "dataset3.jpg",
//   title: "Brain Dataset",
//   caption: "by Harvard Medical School",
//   category: ["MRI", "Brain", "Harvard"]
//   },
//   {
//   imgSrc: "dataset4.jpeg",
//   title: "Lung Dataset",
//   caption: "by Harvard Medical School",
//   category: ["CT", "Lung", "Harvard"]
//   },
//   {
//   imgSrc: "dataset5.png",
//   title: "Kidney Dataset",
//   caption: "by Grossman Medical School",
//   category: ["CT", "Kidney", "Grossman"]
//   },
//   {
//   imgSrc: "dataset6.jpg",
//   title: "Chest Dataset",
//   caption: "by Harvard Medical School",
//   category: ["CT", "Chest", "Harvard"]
//   },
//   {
//   imgSrc: "dataset7.jpeg",
//   title: "Spine Dataset",
//   caption: "by Yale Medical School",
//   category: ["MRI", "Spine", "Yale"]
//   },
//   {
//   imgSrc: "dataset8.jpeg",
//   title: "Knee Dataset",
//   caption: "by SNU hospital",
//   category: ["MRI", "Knee", "SNU"]
//   }
//   ];

function Edge() {
  const [datasets, setDatasets] = useState([]);

  const [value, setValue] = useState('');
  const [showFilter, setShowFilter] = useState(false);
  const [containerHeight, setContainerHeight] = useState('auto');
  
  const [selectedDatasetIds, setSelectedDatasetIds] = useState([]);

  const [filters, setFilters] = useState({
    type: 'ALL',
    bodyPart: 'ALL',
    creator: 'ALL',
  });

  const boxRef = useRef(null);
  const filterRef = useRef(null);

  useEffect(() => {
    if (boxRef.current && filterRef.current) {
      const boxHeight = boxRef.current.offsetHeight;
      const filterHeight = filterRef.current.offsetHeight;
      setContainerHeight(showFilter ? `${boxHeight + 155}px` : `${boxHeight-155}px`);
    }
  }, [showFilter]);

  useEffect(() => {
    // Fetch data from MongoDB
    fetch('http://147.46.121.199:3003')
      .then(response => response.json())
      .then(data => {
        // Extract the desired fields
        const datasets = data.map(item => ({
          imgSrc: item.imgSrc,
          title: item.title,
          caption: item.caption,
          category: item.category,
          _id: item._id,
        }));
        setDatasets(datasets);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value === filters[filterType] ? 'ALL' : value,
    }));
  };

  const onChange = (e) => {
    setValue(e.target.value)
  }


  const handleFilterClick = () => {
    setShowFilter(!showFilter);
  };

  const filteredDatasets = datasets.filter(dataset => {
    return (filters.type === 'ALL' || dataset.category.includes(filters.type)) &&
           (filters.bodyPart === 'ALL' || dataset.category.includes(filters.bodyPart)) &&
           (filters.creator === 'ALL' || dataset.category.includes(filters.creator));
  });

  const handleDatasetClick = (id) => {
    setSelectedDatasetIds((prevSelectedIds) => {
      if (prevSelectedIds.includes(id)) {
        return prevSelectedIds.filter((selectedId) => selectedId !== id);
      } else {
        return [...prevSelectedIds, id];
      }
    });
  };

  return (
    <div className="edge">
      <div className='edge__header'>
        <p className='edge__headerTopCenterEdge poppins-semibold'>EDGE</p>
      </div>
      <div className="edge__slogon">
        <h1>Search Medical Datasets</h1>
        <p>Empower your model with medical datasets. EDGE will do the annoying part for you</p>
        <div className="edge__inputBox" ref={boxRef} style={{ height: containerHeight, transition: 'height 0.6s ease' }}>
          <TextField
            variant="outlined"
            placeholder="What kind of dataset would you like to learn from?"
            inputProps={{
              style: {
                color: '#5B5B5B',
                fontSize: '16px',
                padding: '8px 16px'
              }
            }}
            InputProps={{
              endAdornment: (
                <div className='edge__search__icons'>
                  <button onClick={handleFilterClick}>
                    <img src={process.env.PUBLIC_URL + '/icons/Filter_alt.svg'} alt="Filter Icon" />
                  </button>
                  <button>
                    <img src={process.env.PUBLIC_URL + '/icons/Search.svg'} alt="Search Icon" />
                  </button>
                </div>
              ),
            }}
          />
          <div ref={filterRef} className={`edge__filter ${showFilter ? 'visible' : 'hidden'}`}>
            <div className='edge__filter__container'>
              <div className='edge__filter__content'>
                <div className='edge__filter__content__title'>
                  Dataset Type
                </div>
                <button
                  className={filters.type === 'ALL' ? 'active' : ''}
                  onClick={() => handleFilterChange('type', 'ALL')}
                >
                  ALL
                </button>
                <button
                  className={filters.type === 'MRI' ? 'active' : ''}
                  onClick={() => handleFilterChange('type', 'MRI')}
                >
                  MRI
                </button>
                <button
                  className={filters.type === 'CT' ? 'active' : ''}
                  onClick={() => handleFilterChange('type', 'CT')}
                >
                  CT
                </button>
              </div>

              <div className='edge__filter__content'>
                <div className='edge__filter__content__title'>
                  Body Part
                </div>
                <button
                  className={filters.bodyPart === 'ALL' ? 'active' : ''}
                  onClick={() => handleFilterChange('bodyPart', 'ALL')}
                >
                  ALL
                </button>
                <button
                  className={filters.bodyPart === 'Brain' ? 'active' : ''}
                  onClick={() => handleFilterChange('bodyPart', 'Brain')}
                >
                  Brain
                </button>
                <button
                  className={filters.bodyPart === 'Spine' ? 'active' : ''}
                  onClick={() => handleFilterChange('bodyPart', 'Spine')}
                >
                  Spine
                </button>
              </div>

              <div className='edge__filter__content'>
                <div className='edge__filter__content__title'>
                  Creator
                </div>
                <button
                  className={filters.creator === 'ALL' ? 'active' : ''}
                  onClick={() => handleFilterChange('creator', 'ALL')}
                >
                  ALL
                </button>
                <button
                  className={filters.creator === 'SNU' ? 'active' : ''}
                  onClick={() => handleFilterChange('creator', 'SNU')}
                >
                  SNU
                </button>
                <button
                  className={filters.creator === 'MIT' ? 'active' : ''}
                  onClick={() => handleFilterChange('creator', 'MIT')}
                >
                  MIT
                </button>
              </div>
            </div>
          </div>
          <div className="dataset-grid">
            {filteredDatasets.map(dataset => (
              <div key={dataset.id} className="dataset-card">
                <MedImg imgSrc={'medImages/'+dataset.imgSrc} 
                title={dataset.title} caption={dataset.caption} category={dataset.category}
                selected={selectedDatasetIds.includes(dataset._id)}
                onClick={() => handleDatasetClick(dataset._id)}/>
              </div>
            ))}
          </div>
        </div>
        <div className="edge__selection">
          {datasets
            .filter(dataset => selectedDatasetIds.includes(dataset._id))
            .map(dataset => (
              <div className="edge__selection__item">
                <MedImg
                  imgSrc={'medImages/' + dataset.imgSrc}
                  title={dataset.title}
                  caption={dataset.caption}
                  category={dataset.category}
                  selected={true}  // Always true for selected datasets
                />
              </div>
            ))}
          <div className='edge__selection__buy'>
            <p>Buy Datasets!</p>
          </div>
        </div>

      </div>
    </div>

  );
}

export default Edge;