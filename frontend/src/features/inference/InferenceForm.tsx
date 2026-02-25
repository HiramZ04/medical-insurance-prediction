import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { uiFields } from "./fields";
import { FieldRenderer } from "../../components/FieldRenderer";
import { InferenceSchema, type InferenceInput, type InferenceRequest, type InferenceResponse } from "./schema";
import { runInference } from "./api";

interface InferenceFormProps {
  onSuccess: (result: InferenceResponse) => void;
}

export function InferenceForm({ onSuccess }: InferenceFormProps) {
  const fieldsDefaultValues = Object.fromEntries(
    uiFields
      .filter((f) => "default" in f)
      .map((f) => [f.name, f.default])
  );
  const { register, control, handleSubmit, formState: { errors, isSubmitting } } = useForm<InferenceInput, any, InferenceRequest>({
    resolver: zodResolver(InferenceSchema),
    mode: "onChange",
    defaultValues: fieldsDefaultValues
  });

  const onSubmit = async (data: InferenceRequest) => {
    try {
      const response = await runInference(data);
      await new Promise((resolve) => setTimeout(resolve, 500)); // Model is too fast! UX first!
      onSuccess(response);
    } catch (error) {
      console.error("Error during inference:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="sections-scroll">
        {uiFields.map((field) => {
          const error = (errors as any)?.[field.name]?.message as string | undefined;
          return (
            <FieldRenderer
              key={field.name}
              field={field as any}
              control={control}
              register={register}
              error={error}
            />
          );
        })}
      </div>
      <div className="form-bottom-wrapper">
        <button type="submit" disabled={isSubmitting} className="submit-btn">
          {isSubmitting ? "Running..." : "Run inference"}
        </button>
      </div>

    </form>

  );
}