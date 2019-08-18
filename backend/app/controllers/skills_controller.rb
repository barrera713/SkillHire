class SkillsController < ApplicationController 
   
    def index
        skills = Skill.all 
        render json: skills
    end 

    def create 
        skill = Skill.create(expertise: skills_params["expertise"], description: skills_params["description"], photographer: skills_params["photographer"], developer: skills_params["developer"], designer: skills_params["designer"], videoeditor: skills_params["videoeditor"], contractor_id: @current_contractor.id)
        ContractorSkill.create(skill_id: skill.id, contractor_id: @current_contractor.id)
        render json: skill 
    end 

    def show
        skill = User.find(params[:id])
        render json: skill 
    end 

    def update 
        skill = Skill.find(params[:id])
        skill.update(skills_params)
        render json: skill 
    end 

    def skills_params
        params.permit(:expertise, :description, :photographer, :developer, :designer, :videoeditor)
    end 

end 

