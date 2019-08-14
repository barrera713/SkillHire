class CreateSkills < ActiveRecord::Migration[5.2]
  def change
    create_table :skills do |t|
      
      t.string :expertise
      t.string :description
      t.boolean :photographer
      t.boolean :developer
      t.boolean :designer
      t.boolean :videoeditor
      t.integer :contractor_id

      t.timestamps
    end
  end
end
