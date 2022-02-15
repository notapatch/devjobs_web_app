class CreateJobs < ActiveRecord::Migration[7.0]
  def change
    create_table :jobs do |t|
      t.string :company
      t.string :logo
      t.string :position
      t.datetime :posted_at
      t.integer :contract
      t.string :location
      t.string :website
      t.string :apply
      t.text :description

      t.timestamps
    end
  end
end
