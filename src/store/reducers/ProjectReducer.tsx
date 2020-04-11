const initialProjects = {
    projects: [],
    project: {
        title: '',
        description: ''
    }
}

const ProjectReducer = (state = initialProjects, action: any) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_PROJECT':
            return {...state, projects: [...state.projects, action.payload]}
        case 'EDIT_PROJECT':
            let newProjects: any = [] 
            state.projects.forEach((project, index) => {
                if(index == action.payload[0]) {
                    newProjects.push(action.payload[1])
                    return
                }
                newProjects.push(project)
            })
            return {projects: newProjects, project: initialProjects.project}
        case 'GET_PROJECT':
            const project = state.projects.filter((project, index) => index === action.payload)![0]
            return {...state, project}
        default:
            return state;
    }
}

export default ProjectReducer