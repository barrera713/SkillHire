class CreateContractorSkills < ActiveRecord::Migration[5.2]
  def change
    create_table :contractor_skills do |t|
      t.integer :contractor_id
      t.integer :skill_id

      t.timestamps
    end
  end
end
