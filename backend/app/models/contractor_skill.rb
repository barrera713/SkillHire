class ContractorSkill < ApplicationRecord
    belongs_to :skill 
    belongs_to :contractor 
end
