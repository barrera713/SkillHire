class ContractorSkillsController < ApplicationController 

    def show
        skill = Skill.find(params[:id])
        render json: skill
    end

    def create 
        contractor_skill = Contractor_Skill.new(contractor_skills_params)
        contractor_skill.skill = self.id 
        contractor_skill.contractor = self.id 
        contractor_skill.save 
        render json: order 
    end     

    def index 
        contractor_skills = Contractor_Skill.all 
        render json: contractor_skills
    end

    def update 
        contractor_skill = Contractor_Skill.find(params[:id])
        contractor_skill.update(contractor_skills_params)
    end 

    def contractor_skills_params
        params.permit(:contractor_id, :skill_id)
    end 

end 