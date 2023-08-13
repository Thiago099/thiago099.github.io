
import { GetData } from "@/lib/getData"
import { useTimeline } from "@/components/timeline"
export default Project

function Project()
{
    const main = <div style="width:100%;display:flex;justify-content:center"></div>
    const { addProject, addTitle } = useTimeline(main)

    GetData()
    .then(({Projects})=>{
        for(const project of Projects)
        {
            if(project.Slug)
            {
                continue
            }
            if(project.Title)
            {
                addTitle(project)
                continue
            }
            addProject(project)
        }
    })

    return main
}