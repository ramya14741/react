import React, { useState } from "react";

const initialState = [
  {id: 0, title: "Readability", upvotes: 0, downvotes: 0},
  {id: 1, title: "Performance", upvotes: 0, downvotes: 0},
  {id: 2, title: "Security", upvotes: 0, downvotes: 0},
  {id: 3, title: "Documentation", upvotes: 0, downvotes: 0},
  {id: 4, title: "Testing", upvotes: 0, downvotes: 0},
];

const FeedbackSystem = () => {
  const [state, setState] = useState(initialState);

  const handleVote = (id, voteType) => {
    setState(state => state.map((el) => {
      if(el.id === id) {
        return {
          ...el,
          [voteType]: el[voteType] + 1
        }
      }
      return el
    }))
  };

  return (
    <>
    {state.map(({ id, title, upvotes, downvotes }) => (
      <div key={id} className="my-0 mx-auto text-center w-mx-1200">
      <div className="flex wrap justify-content-center mt-30 gap-30">
        <div className="pa-10 w-300 card">
          <h2>{title}</h2>
          <div className="flex my-30 mx-0 justify-content-around">
            <button id="upvotes" onClick={(e) => handleVote(id, e.target.id)} className="py-10 px-15" data-testid={`upvote-btn-${id}`}>
              👍 Upvote
            </button>
            <button id="downvotes" onClick={(e) => handleVote(id, e.target.id)} className="py-10 px-15 danger" data-testid={`downvote-btn-${id}`}>
              👎 Downvote
            </button>
          </div>
          <p className="my-10 mx-0" data-testid={`upvote-count-${id}`}>
            Upvotes: <strong>{upvotes}</strong>
          </p>
          <p className="my-10 mx-0" data-testid={`downvote-count-${id}`}>
            Downvotes: <strong>{downvotes}</strong>
          </p>
        </div>
      </div>
    </div>
    ))}
    </>
  );
};

export default FeedbackSystem;


--------------------------solution 2-------------------------


import React, { useReducer } from "react";

const aspects = [
  {
    id: '1',
    name: 'Readability'
  },
  {
    id: '2',
    name: 'Performance'
  },
  {
    id: '3',
    name: 'Security'
  },
  {
    id: '4',
    name: 'Documentation'
  },
  {
    id: '5',
    name: 'Testing'
  }
]

const FeedbackSystem = () => {
  return (
    <>
      <ul>
      {aspects.map((aspect) => (
        <li key={aspect.id}>
          <Feedback aspectId={aspect.id} aspectName={aspect.name} />
        </li>
      ))}
      </ul>
    </>
  );
};

const voteReducer = (state, action) => {
  switch (action.type) {
    case 'UPVOTE':
      return { ...state, upvote: state.upvote + 1 };
    case 'DOWNVOTE':
      return { ...state, downvote: state.downvote + 1 };
    default:
      return state;
  }
};

const initialState = {
  upvote: 0,
  downvote: 0
}

const Feedback = ({ aspectId, aspectName }) => {
  const [state, dispatch] = useReducer(voteReducer, initialState)

  return (
    <div className="my-0 mx-auto text-center w-mx-1200">
      <div className="flex wrap justify-content-center mt-30 gap-30">
        <div className="pa-10 w-300 card">
          <h2>{aspectName}</h2>
          <div className="flex my-30 mx-0 justify-content-around">
            <button className="py-10 px-15" onClick={() => dispatch({ type: 'UPVOTE' })} data-testid={`upvote-btn-${aspectId}`}>
              👍 Upvote
            </button>
            <button className="py-10 px-15 danger" onClick={() => dispatch({ type: 'DOWNVOTE' })} data-testid={`downvote-btn-${aspectId}`}>
              👎 Downvote
            </button>
          </div>
          <p className="my-10 mx-0" data-testid={`upvote-count-${state.upvote}`}>
            Upvotes: <strong>{state.upvote}</strong>
          </p>
          <p className="my-10 mx-0" data-testid={`upvote-count-${state.downvote}`}>
            Downvotes: <strong>{state.downvote}</strong>
          </p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackSystem;



-----------------my code ------------------

import React,{ useState } from "react";
const initialState  =[
  {id:0, title:"Readability", upvotes:0, downvotes:0},
  {id:1, title:"Performance", upvotes:0, downvotes:0},
  {id:2, title:"Security", upvotes:0, downvotes:0},
  {id:3, title:"Documentation",upvotes:0,downvotes:0},
  {id:4,title:"Testing", upvotes:0, downvotes:0}

]
const FeedbackSystem = () => {
const [state, setState]= useState(initialState)
const handleVote = (id, voteType) =>{
setState(state => state.map((el)=>{
  if(el.id === id){
    return{
      ...el,
      [voteType]:el[voteType]+1
    }
  }
  return el;
}))
}
  return (
    <>
    {state.map(({id,title, upvotes,downvotes})=>{
      <div key ={id}className="my-0 mx-auto text-center w-mx-1200">
      <div className="flex wrap justify-content-center mt-30 gap-30">
        <div className="pa-10 w-300 card">
          <h2>title</h2>
          <div className="flex my-30 mx-0 justify-content-around">
            <button id="upvotes" onClick={(e)=>handleVote(id,e.target.id)}className="py-10 px-15" data-testid="upvote-btn-0">
              👍 Upvote
            </button>
            <button onClick={(e)=>handleVote(id,e.target.id)}className="py-10 px-15 danger" data-testid="downvote-btn-0">
              👎 Downvote
            </button>
          </div>
          <p className="my-10 mx-0" data-testid="upvote-count-0">
            Upvotes: <strong>{upvotes}</strong>
          </p>
          <p className="my-10 mx-0" data-testid="downvote-count-0">
            Downvotes: <strong>{downvotes}</strong>
          </p>
        </div>
      </div>
    </div>
    })}
    </>
  );
};

export default FeedbackSystem;



----correct code -
import React,{ useReducer } from "react";
const aspects =[
  {
    id:0,
    name:"Readability"
  },{
    id:1,
    name:"Performance"
  },
  {id:2,
    name:"Security"
  },
  {id:3,
    name:"Documentation"
  },{
    id:4,
    name:"Testing"
  }
]
const FeedbackSystem = () => {
return(
  <ul>
    {aspects.map((aspect)=>(
      <li key ={aspect.id}>
        <Feedback aspectId={aspect.id} aspectName={aspect.name}/>
      </li>
    ))}
  </ul>
  
)
}

const voteReducer = (state,action)=>{
  switch(action.type){
    case "UPVOTE":return{
      ...state,
      upvote: state.upvote+1,
    }
    case "DOWNVOTE":return{
      ...state,
      downvote: state.downvote+1
    }
    default:return state;
  }
}

const  initialState ={
  upvote:0,
  downvote:0,
}
const Feedback =({aspectId,aspectName})=>{
  const[state,dispatch] = useReducer(voteReducer,initialState);
  return (
      <div className="my-0 mx-auto text-center w-mx-1200">
      <div className="flex wrap justify-content-center mt-30 gap-30">
        <div className="pa-10 w-300 card">
          <h2>{aspectName}</h2>
          <div className="flex my-30 mx-0 justify-content-around">
            <button onClick={()=>dispatch({type:"UPVOTE"})}className="py-10 px-15" data-testid={`upvote-btn-${aspectId}`}>
              👍 Upvote
            </button>
            <button onClick={()=>dispatch({type:"DOWNVOTE"})}className="py-10 px-15 danger" data-testid={`downvote-btn-${aspectId}`}>
              👎 Downvote
            </button>
          </div>
          <p className="my-10 mx-0" data-testid={`upvote-count-${aspectId}`}>
            Upvotes: <strong>{state.upvote}</strong>
          </p>
          <p className="my-10 mx-0" data-testid={`downvote-count-${aspectId}`}>
            Downvotes: <strong>{state.downvote}</strong>
          </p>
        </div>
      </div>
    </div>
    
  );
}
  

export default FeedbackSystem;
