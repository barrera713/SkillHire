class Skill < ApplicationRecord
    has_many :contractor_skills
    has_many :contractors, through: :contractor_skills 
end
