# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_07_28_133019) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum"
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "amenties", force: :cascade do |t|
    t.bigint "business_id"
    t.text "amenties", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["business_id"], name: "index_amenties_on_business_id"
  end

  create_table "businesses", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name", null: false
    t.text "description", null: false
    t.string "address", null: false
    t.string "address_1"
    t.string "address_2"
    t.integer "zip_code", null: false
    t.string "state", null: false
    t.string "country", null: false
    t.string "phone_number", null: false
    t.string "web_address"
    t.string "menu_web_address"
    t.integer "hours_of_opening", null: false
    t.decimal "min_price", precision: 8, scale: 2, null: false
    t.decimal "max_price", precision: 8, scale: 2, null: false
    t.string "city", null: false
    t.decimal "latitude"
    t.decimal "longitude"
    t.string "categorie_name"
    t.string "owner"
    t.string "specialties"
    t.string "history"
    t.string "about_me"
    t.index ["email"], name: "index_businesses_on_email", unique: true
    t.index ["name"], name: "index_businesses_on_name"
    t.index ["owner"], name: "index_businesses_on_owner"
    t.index ["reset_password_token"], name: "index_businesses_on_reset_password_token", unique: true
  end

  create_table "categories", force: :cascade do |t|
    t.string "name", null: false
    t.bigint "business_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["business_id"], name: "index_categories_on_business_id"
    t.index ["name"], name: "index_categories_on_name"
  end

  create_table "communities", force: :cascade do |t|
    t.bigint "business_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "question_id"
    t.index ["business_id"], name: "index_communities_on_business_id"
  end

  create_table "images", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "business_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["business_id"], name: "index_images_on_business_id"
    t.index ["user_id"], name: "index_images_on_user_id"
  end

  create_table "jwt_denylist", force: :cascade do |t|
    t.string "jti", null: false
    t.datetime "exp", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["jti"], name: "index_jwt_denylist_on_jti"
  end

  create_table "login_activities", force: :cascade do |t|
    t.string "scope"
    t.string "strategy"
    t.string "identity"
    t.boolean "success"
    t.string "failure_reason"
    t.string "user_type"
    t.bigint "user_id"
    t.string "context"
    t.string "ip"
    t.text "user_agent"
    t.text "referrer"
    t.string "city"
    t.string "region"
    t.string "country"
    t.float "latitude"
    t.float "longitude"
    t.datetime "created_at"
    t.index ["identity"], name: "index_login_activities_on_identity"
    t.index ["ip"], name: "index_login_activities_on_ip"
    t.index ["user_type", "user_id"], name: "index_login_activities_on_user"
  end

  create_table "menus", force: :cascade do |t|
    t.string "name", null: false
    t.string "ingredients", null: false
    t.integer "price", default: 0, null: false
    t.integer "business_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "prices", force: :cascade do |t|
    t.decimal "min_price", precision: 8, scale: 2, null: false
    t.decimal "max_price", precision: 8, scale: 2, null: false
    t.integer "average", null: false
    t.string "dollar_signs", null: false
    t.bigint "businesses_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["businesses_id"], name: "index_prices_on_businesses_id"
  end

  create_table "questions", force: :cascade do |t|
    t.bigint "community_id"
    t.string "question", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.index ["community_id", "question"], name: "index_questions_on_community_id_and_question", unique: true
    t.index ["community_id"], name: "index_questions_on_community_id"
    t.index ["user_id"], name: "index_questions_on_user_id"
  end

  create_table "shares", force: :cascade do |t|
    t.bigint "user_id"
    t.string "to", null: false
    t.string "note", null: false
    t.bigint "business_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["business_id"], name: "index_shares_on_business_id"
    t.index ["to", "user_id", "note"], name: "index_shares_on_to_and_user_id_and_note", unique: true
    t.index ["user_id"], name: "index_shares_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.integer "failed_attempts", default: 0, null: false
    t.string "unlock_token"
    t.datetime "locked_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "username", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.integer "zip_code", null: false
    t.datetime "birth_date"
    t.integer "gender", null: false
    t.string "phone_number", null: false
    t.string "full_address"
    t.boolean "account_active", default: true
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["unlock_token"], name: "index_users_on_unlock_token", unique: true
  end

  create_table "working_hours", force: :cascade do |t|
    t.integer "business_id", null: false
    t.json "working_hours", default: {}, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "status"
    t.index ["business_id"], name: "index_working_hours_on_business_id"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
end
